import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
    },

    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const { openModal } = modalSlice.actions;
