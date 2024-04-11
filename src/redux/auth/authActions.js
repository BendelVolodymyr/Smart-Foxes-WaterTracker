import { createAction } from '@reduxjs/toolkit';

export const setToken = createAction('auth/setToken', token => ({
  payload: token,
}));
