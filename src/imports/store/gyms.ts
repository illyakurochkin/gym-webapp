import { createAction, createReducer } from "@reduxjs/toolkit";

const SET_GYMS = 'gyms/SET_GYMS';
const SET_GYMS_LOADING = 'gyms/SET_GYMS_LOADING';

type Gym = {
  username: string,
  roles: string[],
};

export const setGymsAction = createAction<Gym[]>(SET_GYMS);
export const setGymsLoadingAction = createAction<boolean>(SET_GYMS_LOADING);

export const selectGyms = (state: any): Account | null => state.gyms.data;
export const selectGymsLoading = (state: any): boolean => state.gyms.loading;

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_GYMS]: (state: any, {payload}: any) => ({...state, data: payload}),
  [SET_GYMS_LOADING]: (state: any, {payload}: any) => ({...state, loading: payload}),
})
