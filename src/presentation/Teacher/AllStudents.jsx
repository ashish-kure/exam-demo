import React from "react";
import AllStudentsContainer from "../../container/Teacher/AllStudentsContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import StudentContainer from "../../container/Teacher/StudentContainer";

const AllStudents = () => {
  const { tableData, loading, flag } = AllStudentsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <>
      <StudentContainer flag={flag} />
      <Table tableData={tableData} />
    </>
  );
};

export default AllStudents;
