import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    gender: null,
    avatarURL: null,
    waterRate: null,
    createdAt: null,
  },
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

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(API.signUp.pending, handlePending)
      .addCase(API.signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(API.signUp.rejected, handleRejected)
      .addCase(API.signIn.pending, handlePending)
      .addCase(API.signIn.fulfilled, (state, { payload }) => {
        // console.log(action.payload);
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.user.gender = payload.user.gender;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.waterRate = payload.user.waterRate;
        state.user.createdAt = payload.user.createdAt;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(API.signIn.rejected, handleRejected)
      .addCase(API.logout.pending, handlePending)
      .addCase(API.logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          gender: null,
          avatarURL: null,
          waterRate: null,
          createdAt: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        state.isLoading = false;
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
      .addCase(API.refreshUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isAuthenticated = true;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(API.refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(API.uploadAvatar.pending, handlePending)
      .addCase(API.uploadAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload;
      })
      .addCase(API.uploadAvatar.rejected, handleRejected)
      .addCase(API.updateUserInfo.pending, handlePending)
      .addCase(API.updateUserInfo.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
      })
      .addCase(API.updateUserInfo.rejected, handleRejected)
      .addCase(API.updateWaterRate.pending, handlePending)
      .addCase(API.updateWaterRate.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user.waterRate = payload;
        state.isLoading = false;
      })
      .addCase(API.updateWaterRate.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
