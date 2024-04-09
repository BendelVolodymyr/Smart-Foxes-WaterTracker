import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://smart-foxes-backend-watertracker.onrender.com/api';

export const forgotPassword = createAsyncThunk(
  'users/passwordReset',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/passwordReset', userData);
      console.log(userData);

      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      alert(message);
      return rejectWithValue(error.message);
    }
  }
);
