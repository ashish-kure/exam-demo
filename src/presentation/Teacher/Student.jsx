import React from "react";
import StudentContainer from "../../container/Teacher/StudentContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";

const Student = () => {
  const { handleBack, studentData, loading, result } = StudentContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={sectionStyle}>
      <div>
        Name: <strong>{studentData?.name}</strong>
      </div>
      <div>
        Email: <strong>{studentData?.email}</strong>
      </div>

      {result?.length ? (
        <div>
          Result: <Table tableData={result} />
        </div>
      ) : null}
      <CustomButton label="Back" type={button} onClick={handleBack} />
    </section>
  );
};

export default Student;

const sectionStyle = {
  marginLeft: 150,
};
