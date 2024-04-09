import { createSlice } from '@reduxjs/toolkit';

import { forgotPassword } from './operations';

const initialState = {
  user: {
    email: null,
  },
  isLoading: false,
  error: null,
};

const passwordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const passwordReducer = passwordSlice.reducer;
