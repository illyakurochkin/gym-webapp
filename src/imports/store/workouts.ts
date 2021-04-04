import { createAction, createReducer } from "@reduxjs/toolkit";

const SET_WORKOUTS = 'workouts/SET_WORKOUTS';
const SET_WORKOUTS_LOADING = 'workouts/SET_WORKOUTS_LOADING';

type Workout = {
  username: string,
  roles: string[],
};

export const setWorkoutsAction = createAction<Workout[]>(SET_WORKOUTS);
export const setWorkoutsLoadingAction = createAction<boolean>(SET_WORKOUTS_LOADING);

export const selectWorkouts = (state: any): Account | null => state.workouts.data;
export const selectWorkoutsLoading = (state: any): boolean => state.workouts.loading;

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_WORKOUTS]: (state: any, {payload}: any) => ({...state, data: payload}),
  [SET_WORKOUTS_LOADING]: (state: any, {payload}: any) => ({...state, loading: payload}),
})
