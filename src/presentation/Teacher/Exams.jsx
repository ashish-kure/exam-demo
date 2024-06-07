import React from "react";
import ExamContainer from "../../container/Teacher/ExamContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";

const Exams = () => {
  const { loading, tableData, handleCreateExam } = ExamContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <Table tableData={tableData} /> <br />
      <CustomButton
        type={button}
        label="Create New Exam"
        onClick={handleCreateExam}
      />
    </section>
  );
};

export default Exams;

const style = {
  marginLeft: 150,
};
