import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger';
import { userSlice, eventSlice, cartSlice } from '../components'


const store = configureStore({
    reducer: {
        users: userSlice,
        events: eventSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reduxLogger)
  });

export default store;