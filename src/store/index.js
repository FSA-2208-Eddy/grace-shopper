import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger';


const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reduxLogger)
  });

export default store;