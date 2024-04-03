import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  contetnt: null,
};

const modalSlise = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setModal: (state, action) => {
      state.isOpen = action.payload;
    },
    setContetnt: (state, action) => {
      state.contetnt = action.payload;
    },
  },
});

export const { setModal, setContetnt } = modalSlise.actions;
export const modalReduser = modalSlise.reducer;
