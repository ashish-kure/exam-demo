import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
  errors: {},
  isEdit: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onChange: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },

    setError: (state, action) => {
      const { name, error } = action.payload;
      state.errors[name] = error;
    },

    clearError: (state, action) => {
      delete state.errors[action.payload];
    },

    clearAllErrors: (state, action) => {
      state.errors = {};
    },

    resetForm: (state, action) => {
      state.formData = {};
      state.errors = {};
    },

    populateForm: (state, action) => {
      state.formData = action.payload;
    },

    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
});

export default formSlice.reducer;
export const {
  onChange,
  setError,
  resetForm,
  clearError,
  clearAllErrors,
  populateForm,
  setIsEdit,
} = formSlice.actions;
