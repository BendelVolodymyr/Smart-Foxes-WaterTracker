import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations';
import { builders } from 'prettier/doc';

const initialState = {
  waterDayList: [], //portionList:[]
  waterMounthList: [],
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
        state.waterDayList.push(action.payload);
      })
      .addCase(API.addPortion.rejected, handleRejected)
      .addCase(API.deletePortion.pending, handlePending)
      .addCase(API.deletePortion.fulfilled, (state, action) => {
        const idx = state.waterDayList.findIndex(
          (data) => (data.id = action.payload.id)
        );
        state.waterDayList.splice(idx, 1);
        state.isLoading = false;
      })
      .addCase(API.updatePortion.pending, handlePending)
      .addCase(API.updatePortion.fulfilled, (state, action) => {})
      .addCase(API.updatePortion.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
