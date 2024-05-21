import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
  errors: {},
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

    resetForm: (state, action) => {
      return initialState;
    },

    clearError: (state, action) => {
      delete state.errors[action.payload];
    },
  },
});

export default formSlice.reducer;
export const { onChange, setError, resetForm, clearError } = formSlice.actions;
