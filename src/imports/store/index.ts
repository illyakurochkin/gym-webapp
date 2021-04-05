import {combineReducers, configureStore} from '@reduxjs/toolkit';
import account from './account';
import workouts from './workouts';
import coaches from './coaches';
import gyms from "./gyms";

const rootReducer = combineReducers({
  account,
  workouts,
  coaches,
  gyms,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
