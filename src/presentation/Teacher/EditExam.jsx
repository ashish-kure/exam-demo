import React from "react";
import EditExamContainer from "../../container/Teacher/EditExamContainer";
import ButtonLoader from "../../shared/ButtonLoader";
import ExamForm from "../exam/ExamForm";

const EditExam = () => {
  const { loading, updateLoading, fields, onSubmit } = EditExamContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <ExamForm {...{ fields, onSubmit }} />
      {updateLoading && <ButtonLoader />}
    </section>
  );
};

export default EditExam;

const style = {
  marginLeft: 150,
};
