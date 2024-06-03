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
  addAllStudents,
  addVerifiedStudents,
  addExam,
  addQuestion,
  removeExam,
} = teacherSlice.actions;

// {
//   subjectName: "Science",
//   questions: [
//     {
//       question: "question1",
//       answer: "ans1",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question2",
//       answer: "ans2",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question3",
//       answer: "ans3",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question4",
//       answer: "ans4",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question5",
//       answer: "ans1",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question6",
//       answer: "ans2",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question7",
//       answer: "ans3",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question8",
//       answer: "ans4",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question9",
//       answer: "ans1",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question10",
//       answer: "ans2",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question11",
//       answer: "ans3",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question12",
//       answer: "ans4",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question13",
//       answer: "ans1",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question14",
//       answer: "ans2",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//     {
//       question: "question15",
//       answer: "ans3",
//       options: ["ans1", "ans2", "ans3", "ans4"],
//     },
//   ],
//   notes: ["10mins exam", "", "start time 10am", ""],
// };
