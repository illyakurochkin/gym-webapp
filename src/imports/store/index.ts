import { configureStore, combineReducers } from '@reduxjs/toolkit';
import account from './account';
import workouts from './workouts';
import coaches from './coaches';

const rootReducer = combineReducers({
  account,
  workouts,
  coaches,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
