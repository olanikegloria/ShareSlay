import { createAsyncThunk } from '@reduxjs/toolkit';
import clothesApi from '../../api/clothesApi';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await clothesApi.post('/users', userData);
      const token = response.headers['x-auth-token'];
      localStorage.setItem('jwt', token);
      console.log(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);




