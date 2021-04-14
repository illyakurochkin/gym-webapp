import { createAction, createReducer } from "@reduxjs/toolkit";

const SET_ACCOUNT = 'account/SET_ACCOUNT';
const SET_ACCOUNT_LOADING = 'account/SET_ACCOUNT_LOADING';

export type Account = {
  id: string,
  birthDate: string,
  username: string,
  roles: string[],
  avatar: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
};

export const setAccountAction = createAction<Account | null>(SET_ACCOUNT);
export const setAccountLoadingAction = createAction<boolean>(SET_ACCOUNT_LOADING);

export const selectAccount = (state: any): Account | null => {
  console.log('state.account.data', state.account.data);
  return state.account.data && {
    ...state.account.data, roles: ['ROLE_COACH'],
  };
}
//   && {
//   roles: ['ROLE_COACH'],
//   firstName: 'Hello',
//   lastName: 'World',
//   phone: '+380688081830',
//   email: 'illya.kurochkin@gmail.com',
// };
export const selectAccountLoading = (state: any): boolean => state.account.loading;

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_ACCOUNT]: (state: any, {payload}: any) => ({...state, data: payload}),
  [SET_ACCOUNT_LOADING]: (state: any, {payload}: any) => ({...state, loading: payload}),
})
