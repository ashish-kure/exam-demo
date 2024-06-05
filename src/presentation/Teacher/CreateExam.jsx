import React from "react";
import ExamForm from "../exam/ExamForm";
import CreateExamContainer from "../../container/Teacher/CreateExamContainer";
import ButtonLoader from "../../shared/ButtonLoader";

const CreateExam = () => {
  const { loading, editLoading, fields, totalQuestions, onSubmit } =
    CreateExamContainer();

  if (editLoading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <ExamForm {...{ fields, totalQuestions, onSubmit }} />
      {loading && <ButtonLoader />}
    </section>
  );
};

export default CreateExam;

const style = {
  marginLeft: 150,
};
