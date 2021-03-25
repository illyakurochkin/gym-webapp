import axios from 'axios';

const client = axios.create({baseURL: 'http://localhost:5000'});

const setAuthorizationHeader = (value: string) => {
  client.defaults.headers['Authorization'] = `Bearer ${value}`;
};

const authenticate = async (email: string, password: string) => {
  // const token = await client.get('/oauth')
  //   .then(({data}: any) => data.access_token);
  const token = await new Promise((resolve: any) => {
    setTimeout(() => resolve('flsdkjflsdkfjsdf'), 3000);
  });
  return token as string;
};

const getAccount = async () => {
  // return client.get('/me')
  //   .then(({data}: any) => data);

  return new Promise((resolve: any) => {
    setTimeout(() => resolve({
      id: 1, name: 'Account Name'
    }), 2000);
  })
};

export default {
  getAccount,
  authenticate,
  setAuthorizationHeader,
};
