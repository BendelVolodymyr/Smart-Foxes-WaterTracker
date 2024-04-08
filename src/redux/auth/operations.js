import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://smart-foxes-backend-watertracker.onrender.com/api';

// axios.defaults.baseURL = 'http://localhost:3000/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/users/register', userData);
    token.set(response.data.token);

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    alert(message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk('auth/signin', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', userData);

    console.log(response);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    alert(message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');

    console.log(response);
    token.unset();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     console.log('NO TOKEN');
//     return thunkAPI.rejectWithValue('Unable to fetch user');
//   }
//   token.set(persistedToken);
//   try {
//     const response = await axios.get('users/current');

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    token.set(persistedToken);
    const result = await axios.get('/users/current');
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const uploadAvatar = createAsyncThunk('auth/avatar', async (formData, thunkAPI) => {
  try {
    const {
      data: { avatarURL },
    } = await axios.patch('/users/avatars', formData);

    return avatarURL;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserInfo = createAsyncThunk('auth/info', async (formData, thunkAPI) => {
  try {
    const response = await axios.patch('/users', formData);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateWaterRate = createAsyncThunk(
  'water-rate/editDailyNorma',
  async (data, thunkApi) => {
    const waterRate = data.toString() * 1000;
    try {
      const response = await axios.patch(`/water-rate`, { waterRate });

      return response.data.waterRate;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
