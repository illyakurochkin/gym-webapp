import axios from 'axios';
import moment from 'moment';

const client = axios.create({baseURL: 'http://localhost:8080'});

const setAuthorizationHeader = (value: string | null) => {
  client.defaults.headers['Authorization'] = value ? `Bearer ${value}` : undefined;
};

const authenticate = async (email: string, password: string): Promise<string> => {
  const {data} = await client.post('/api/auth/signin', {email, password});
  return data.accessToken;
};

const getAccount = async (): Promise<any> => {
  const {data} = await client.get('/me');
  return data;
};

export type Account = {
  firstName: string,
  lastName: string,
  birthDate: string,
  phoneNumber: string,
  sex: string,
  email: string,
  password: string,
  image: string,
}

const registerAccount = async (account: Account) => {
  // const formData = new FormData();
  // formData.append('firstName', account.firstName);
  // formData.append('lastName', account.lastName);
  // formData.append('sex', account.sex);
  // formData.append('email', account.email);
  // formData.append('password', account.password);

  const {data} = await client.post('/api/auth/signup', account);
  console.log('data', data);
};

export type Equipment = {
  id: string,
  name: string,
  type: string,
  equipmentCondition: string
}

export type Gym = {
  id: string,
  email: string,
  phone: string,
  fine: number,
  country: string,
  city: string,
  flat: string,
  house: string,
  street: string,
  equipment: Equipment[],
  photo: string
}

export type Coach = {
  id: string,
  firstName: string,
  lastName: string,
  sex: string,
  email: string,
  payment: number,
  rang: string
}

export type Workout = {
  id: string,
  startTime: string,
  endTime: string,
  coach: Coach,
  gym: Gym,
  surcharge: number
}

const getGyms = async (): Promise<Gym[]> => {
  const {data} = await client.get('/gyms');
  return data.content;
  // await new Promise(resolve => setTimeout(resolve, 4000));
  // return [{
  //   id: '1',
  //   email: 'illya.kurochkin@gmail.com',
  //   phone: '+380680081830',
  //   fine: 3,
  //   country: 'Україна',
  //   city: 'Київ',
  //   street: 'Хрещатик',
  //   house: '24',
  //   flat: '2',
  //   photo: 'https://3434/343',
  //   equipment: [],
  // }];
};

const getCoaches = async (): Promise<Coach[]> => {
  const {data} = await client.get('/coaches');
  return data.content;
};

const getAvailableCoaches = async (gymId: string, date: Date): Promise<Coach[]> => {
  const {data} = await client.get('/coaches');
  return data.content;
}

const getMyWorkouts = async (): Promise<Workout[]> => {
  const {data} = await client.get('/workouts');
  return data.content;
}

const createWorkout = async ({coachId, gymId, date}: {coachId: string, gymId: string, date: Date}): Promise<void> => {
  await client.post('/workouts', {
    coachId, gymId, date: moment(date).format('YYYY-MM-DD')
  });
}

const api = {
  getAccount,
  registerAccount,
  authenticate,
  setAuthorizationHeader,
  getGyms,
  getCoaches,
  getAvailableCoaches,
  createWorkout,
  getMyWorkouts
}

export default api;
