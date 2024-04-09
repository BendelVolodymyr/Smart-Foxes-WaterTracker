import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations';

const initialState = {
  waterDayList: [], //portionList:[]
  waterMonthList: [],
  waterRate: null,
  isLoading: false,
  error: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'waterSlice',

  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(API.addPortion.pending, handlePending)
      .addCase(API.addPortion.fulfilled, (state, action) => {
        console.log(action.payload);
        state.waterDayList.push(action.payload.data);
        state.isLoading = false;
      })
      .addCase(API.addPortion.rejected, handleRejected)
      .addCase(API.deletePortion.pending, handlePending)
      .addCase(API.deletePortion.fulfilled, (state, action) => {
        const idx = state.waterDayList.findIndex((data) => data._id === action.payload.id);
        state.waterDayList.splice(idx, 1);
        state.isLoading = false;
      })
      .addCase(API.updatePortion.pending, handlePending)
      .addCase(API.updatePortion.fulfilled, (state, action) => {
        state.waterDayList = state.waterDayList.map((portion) => {
          if (portion._id === action.payload._id) return action.payload;
          return portion;
        });
        state.isLoading = false;
      })
      .addCase(API.updatePortion.rejected, handleRejected)

      .addCase(API.portionsPerDay.pending, handlePending)
      .addCase(API.portionsPerDay.fulfilled, (state, action) => {
        // console.log(action.payload.portions);
        state.waterDayList = action.payload.portions ?? [];
        state.isLoading = false;
      })
      .addCase(API.portionsPerDay.rejected, handleRejected)
      .addCase(API.portionsPerMonth.pending, handlePending)
      .addCase(API.portionsPerMonth.fulfilled, (state, action) => {
        state.waterMonthList = action.payload.data.monthData ?? [];
      })
      .addCase(API.portionsPerMonth.rejected, handleRejected)
      .addCase(API.updateWaterRate.pending, handlePending)
      .addCase(API.updateWaterRate.fulfilled, (state, { payload }) => {
        state.waterRate = payload;
        state.isLoading = false;
      })
      .addCase(API.updateWaterRate.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
