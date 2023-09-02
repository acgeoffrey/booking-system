import { configureStore } from '@reduxjs/toolkit';

import bookingReducer from './bookingSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    user: userReducer,
  },
});

export default store;
