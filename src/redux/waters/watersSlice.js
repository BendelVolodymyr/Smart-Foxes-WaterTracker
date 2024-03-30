import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayWater: [],
  monthWater: [],
};

const waterSlice = createSlice({
  name: 'waterSlice',
  initialState,
  reducers: {},
});

export const waterReducer = waterSlice.reducer;
