import React from "react";
import AllStudentsContainer from "../../container/Teacher/AllStudentsContainer";
import ButtonLoader from "../../shared/ButtonLoader";

const AllStudents = () => {
  const { students, loading } = AllStudentsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return <pre>{JSON.stringify(students, null, 2)}</pre>;
};

export default AllStudents;
