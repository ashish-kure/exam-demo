import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExams: [],
  currentExam: {},
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addAllExams: (state, action) => {
      state.allExams = action.payload;
    },

    addCurrentExam: (state, action) => {
      const { data, info } = action.payload;
      state.currentExam = { ...state.currentExam, questions: data, info };
    },
  },
});

export default studentSlice.reducer;
export const { addAllExams, addCurrentExam } = studentSlice.actions;
