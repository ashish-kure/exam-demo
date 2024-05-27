import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStudents: [],
  verifiedStudents: [],
  exams: [],
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    addAllStudents: (state, action) => {
      state.allStudents = action.payload;
    },

    addVerifiedStudents: (state, action) => {
      state.verifiedStudents = action.payload;
    },

    addExams: (state, action) => {},
  },
});

export default teacherSlice.reducer;
export const { addAllStudents, addVerifiedStudents } = teacherSlice.actions;
