import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExams: [],
  allResults: [],
  currentExam: {},
  answerSheet: {},
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

    fillExamQuestion: (state, action) => {
      const { name, value } = action.payload;
      state.answerSheet[name] = value;
    },

    addAllResults: (state, action) => {
      state.allResults = action.payload;
    },
  },
});

export default studentSlice.reducer;
export const { addAllExams, addCurrentExam, fillExamQuestion, addAllResults } =
  studentSlice.actions;
