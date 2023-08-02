import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './authSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;