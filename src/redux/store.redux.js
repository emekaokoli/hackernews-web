import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { storiesSlice } from './stories.slice.redux';


const store = configureStore({
  reducer: storiesSlice,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        serializableCheck: true,
      },
    }).concat(logger),
});
export default store;
