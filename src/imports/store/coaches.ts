import { createAction, createReducer } from "@reduxjs/toolkit";

const SET_COACHES = 'coaches/SET_COACHES';
const SET_COACHES_LOADING = 'coaches/SET_COACHES_LOADING';

type Coach = {
  username: string,
  roles: string[],
};

export const setCoachesAction = createAction<Coach[]>(SET_COACHES);
export const setCoachesLoadingAction = createAction<boolean>(SET_COACHES_LOADING);

export const selectCoaches = (state: any): Account | null => state.coaches.data;
export const selectCoachesLoading = (state: any): boolean => state.coaches.loading;

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_COACHES]: (state: any, {payload}: any) => ({...state, data: payload}),
  [SET_COACHES_LOADING]: (state: any, {payload}: any) => ({...state, loading: payload}),
})
