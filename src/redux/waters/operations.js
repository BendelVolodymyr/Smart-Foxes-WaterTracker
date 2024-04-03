import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://smart-foxes-backend-watertracker.onrender.com/api';

//const { waterVolume, date } = req.body;
export const addPortion = createAsyncThunk(
  'water/add',

  async ({ waterVolume, date }, thunkAPI) => {
    try {
      const response = await axios.post('/waters/', { waterVolume, date });

      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePortion = createAsyncThunk(
  'water/delete',

  async (id, thunkAPI) => {
    console.log(id);

    try {
      const response = await axios.delete(`/waters/${id}`);

      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePortion = createAsyncThunk(
  'water/update',

  async ({ id, date, portion }, thunkAPI) => {
    try {
      const response = await axios.patch(`/waters/${id}`, { date, portion });

      // console.log(response);
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
      const response = await axios.patch(`/water-rate/`, data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const portionsPerDay = createAsyncThunk(
  'water/portionsPerDay',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(`/waters/today/`, data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const portionsPerMonth = createAsyncThunk(
  'water/portionsPerMonth',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(`/waters/month/`, data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
