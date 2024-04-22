import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwt');
      if (!token) {
        return rejectWithValue('No token available');
      }

      const response = await axios.get('http://localhost:4000/api/users/me', {
        headers: {
          'x-auth-token': token
        }
      });
      console.log("sucessful");
      return response.data ;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

