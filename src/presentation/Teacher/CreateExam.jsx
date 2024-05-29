import React from "react";
import ExamForm from "../exam/ExamForm";
import CreateExamContainer from "../../container/Teacher/CreateExamContainer";

const CreateExam = () => {
  const { fields, totalQuestions, handleSubmit } = CreateExamContainer();

  return <ExamForm {...{ fields, totalQuestions, handleSubmit }} />;
};

export default CreateExam;
