import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger';
import { userSlice, eventSlice } from '../components'


const store = configureStore({
    reducer: {
        users: userSlice,
        events: eventSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reduxLogger)
  });

export default store;