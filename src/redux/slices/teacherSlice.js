import { createSlice } from "@reduxjs/toolkit";
import {
  objectEntries,
  objectKeys,
  objectValues,
} from "../../utils/javascript";

const initialState = {
  allStudents: [],
  verifiedStudents: [],
  exam: {
    subjectName: "",
    questions: [],
    notes: [],
  },
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
      const { formData, step } = action.payload;
      const { notes, subjectName, answer, question } = formData;

      const options = objectKeys(formData)
        .filter((key) => key.includes("optionText"))
        .map((key) => formData[key]);

      const questionObject = { answer, options, question };

      state.exam.subjectName = subjectName;
      state.exam.notes.push(notes);
      state.exam.questions[step] = questionObject;
    },
  },
});

export default teacherSlice.reducer;
export const { addAllStudents, addVerifiedStudents, addExam } =
  teacherSlice.actions;
