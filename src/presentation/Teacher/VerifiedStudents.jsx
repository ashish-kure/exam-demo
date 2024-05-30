import React from "react";
import VerifiedStudentsContainer from "../../container/Teacher/VerifiedStudentsContainer";
import ButtonLoader from "../../shared/ButtonLoader";
import Table from "../../shared/Table";

const VerifiedStudents = () => {
  const { loading, tableData } = VerifiedStudentsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <Table tableData={tableData} />
    </section>
  );
};

export default VerifiedStudents;

const style = {
  marginLeft: 150,
};
