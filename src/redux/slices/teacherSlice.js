import { createSlice } from "@reduxjs/toolkit";

const initialExam = {
  subjectName: "",
  questions: [],
  notes: [],
};

const initialState = {
  allStudents: [],
  verifiedStudents: [],
  exam: initialExam,
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

    addExam: (state, action) => {
      state.exam = action.payload;
    },

    removeExam: (state, action) => {
      state.exam = initialExam;
    },
  },
});

export default teacherSlice.reducer;
export const {
  addExam,
  addQuestion,
  removeExam,
  addAllStudents,
  addVerifiedStudents,
} = teacherSlice.actions;
