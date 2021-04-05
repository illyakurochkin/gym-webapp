import { createAction, createReducer } from "@reduxjs/toolkit";

const SET_ACCOUNT = 'account/SET_ACCOUNT';
const SET_ACCOUNT_LOADING = 'account/SET_ACCOUNT_LOADING';

export type Account = {
  username: string,
  roles: string[],
  photo: string,
};

export const setAccountAction = createAction<Account | null>(SET_ACCOUNT);
export const setAccountLoadingAction = createAction<boolean>(SET_ACCOUNT_LOADING);

export const selectAccount = (state: any): Account | null => state.account.data;
export const selectAccountLoading = (state: any): boolean => state.account.loading;

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_ACCOUNT]: (state: any, {payload}: any) => ({...state, data: payload}),
  [SET_ACCOUNT_LOADING]: (state: any, {payload}: any) => ({...state, loading: payload}),
})
