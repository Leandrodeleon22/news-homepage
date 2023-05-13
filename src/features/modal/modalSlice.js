import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  windowWidth: window.innerWidth,
};

const modalSLice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isVisible = true;
    },

    closeModal: (state) => {
      state.isVisible = false;
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
  },
});

export const { openModal, closeModal, setWindowWidth } = modalSLice.actions;

export default modalSLice.reducer;
