import { createAction, createReducer } from "@reduxjs/toolkit";

const SET_ACCOUNT = 'account/SET_ACCOUNT';
const SET_ACCOUNT_LOADING = 'account/SET_ACCOUNT_LOADING';

export const setAccountAction = createAction<any | null>(SET_ACCOUNT);
export const setAccountLoadingAction = createAction<boolean>(SET_ACCOUNT_LOADING);

export const selectAccount = (state: any) => state.account.data;
export const selectAccountLoading = (state: any) => state.account.loading;

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_ACCOUNT]: (state: any, {payload}: any) => ({...state, data: payload}),
  [SET_ACCOUNT_LOADING]: (state: any, {payload}: any) => ({...state, loading: payload}),
})
