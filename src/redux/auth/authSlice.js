import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations';

const initialState = {
  user: { name: null, email: null, gender: null, avatarUrl: null, norma: null },
  // isAuthenticated: false,
  token: null,
  isRefreshing: true,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(API.signUp.pending, handlePending)
      .addCase(API.signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(API.signUp.rejected, handleRejected)
      .addCase(API.signIn.pending, handlePending)
      .addCase(API.signIn.fulfilled, (state, action) => {
        console.log(action);
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(API.signIn.rejected, handleRejected)
      .addCase(API.logout.pending, handlePending)
      .addCase(API.logout.fulfilled, (state) => {
        state.user = { name: null, email: null, gender: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(API.logout.rejected, handleRejected)
      // .addCase(API.current.pending, handlePending)
      // .addCase(API.current.fulfilled, (state, action) => {
      //   console.log(action);
      //   state.user = { ...action.payload };
      //   state.isLoggedIn = true;
      //   state.isLoading = false;
      // })
      // .addCase(API.current.rejected, handleRejected)
      .addCase(API.refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(API.refreshUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isAuthenticated = true;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(API.refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
