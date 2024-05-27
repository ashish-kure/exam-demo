import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExams: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addAllExams: (state, action) => {
      state.allExams = action.payload;
    },
  },
});

export default studentSlice.reducer;
export const { addAllExams } = studentSlice.actions;
