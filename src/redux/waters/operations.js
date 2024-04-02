import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api';

//const { waterVolume, date } = req.body;
export const addPortion = createAsyncThunk(
  'water/add',

  async ({ waterVolume, date }, thunkAPI) => {
    try {
      const response = await axios.post('/water/', { waterVolume, date });

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
      const response = await axios.delete(`/water/${id}`);

      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePortion = createAsyncThunk(
  'water/update',

  async ({ id, waterVolume }, thunkAPI) => {
    try {
      const response = await axios.patch('/water/', { id, waterVolume });

      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const portionsPerDay = createAsyncThunk();

export const portionsPerMounth = createAsyncThunk();
