import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import loginReducer from './reducers/loginSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  }
});

export default store;
