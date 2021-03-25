import { configureStore, combineReducers } from '@reduxjs/toolkit';
import account from './account';

const rootReducer = combineReducers({
  account,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
