import React from "react";
import ExamForm from "../exam/ExamForm";
import CreateExamContainer from "../../container/Teacher/CreateExamContainer";

const CreateExam = () => {
  const { fields, totalQuestions } = CreateExamContainer();

  return <ExamForm {...{ fields, totalQuestions }} />;
};

export default CreateExam;
