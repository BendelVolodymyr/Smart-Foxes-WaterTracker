import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://smart-foxes-backend-watertracker.onrender.com/api';

export const addPortion = createAsyncThunk(
  'water/add',

  async ({ waterVolume, date }, thunkAPI) => {
    try {
      const response = await axios.post('/waters', { waterVolume, date });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePortion = createAsyncThunk(
  'water/delete',

  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/waters/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePortion = createAsyncThunk(
  'water/update',

  async ({ id, date, waterVolume }, thunkAPI) => {
    try {
      const response = await axios.patch(`/waters/${id}`, { date, waterVolume });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterRate = createAsyncThunk(
  'water-rate/editDailyNorma',
  async (data, thunkApi) => {
    try {
      const response = await axios.patch(`/water-rate`, { waterRate: data });

      return response.data.waterRate;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const portionsPerDay = createAsyncThunk('water/portionsPerDay', async (_, thunkApi) => {
  try {
    const date = new Date();

    const response = await axios.get(`/waters/today?date=${date}`);

    return response.data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const portionsPerMonth = createAsyncThunk(
  'water/portionsPerMonth',
  async ({ startDate, endDate }, thunkApi) => {
    try {
      const response = await axios.get(`/waters/month?startDate=${startDate}&endDate=${endDate}`);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
