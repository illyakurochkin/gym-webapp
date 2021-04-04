import axios from 'axios';

const client = axios.create({baseURL: 'http://localhost:8080'});

const setAuthorizationHeader = (value: string | null) => {
  client.defaults.headers['Authorization'] = value ? `Bearer ${value}` : undefined;
};

const authenticate = async (email: string, password: string): Promise<string> => {
  const {data} = await client.post('/api/auth/signin', {email, password});
  return data.accessToken;
};

const getAccount = async (): Promise<{ username: string, roles: string[] }> => {
  const {data} = await client.get('/me');
  return data;
};

type Account = {
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
  const formData = new FormData();
  formData.append('firstName', account.firstName);
  formData.append('lastName', account.lastName);
  formData.append('birthDate', account.birthDate);
  formData.append('phoneNumber', account.phoneNumber);
  formData.append('sex', account.sex);
  formData.append('email', account.email);
  formData.append('password', account.password);
  formData.append('image', account.image);

  const {data} = await client.post('/api/auth/signup', account);
  console.log('data', data);
};

export type Equipment = {
  id: string,
  name: string,
  type: string,
  equipmentCondition: string,
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
}

const getGyms = async (): Promise<Gym[]> => {
  const {data} = await client.get('/gyms');
  return data;
};

const api = {
  getAccount,
  registerAccount,
  authenticate,
  setAuthorizationHeader,
  getGyms,
}

export default api;
