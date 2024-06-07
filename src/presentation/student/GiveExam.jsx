import React from "react";
import GiveExamContainer from "../../container/Student/GiveExamContainer";
import Form from "../../shared/Form";
import ButtonLoader from "../../shared/ButtonLoader";

const GiveExam = () => {
  const {
    currentExam,
    questionFields,
    loading,
    submitLoading,
    onInputChange,
    handleSubmit,
  } = GiveExamContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <h3>{currentExam?.info?.subject}</h3>
      <h4>
        {currentExam?.info?.notes.map((note, ind) => (
          <p key={ind}>{note}</p>
        ))}
      </h4>
      <Form
        fields={questionFields}
        onInputChange={onInputChange}
        onSubmit={handleSubmit}
      />
      {submitLoading && <ButtonLoader />}
    </section>
  );
};

export default GiveExam;

const style = {
  marginLeft: 150,
  display: "flex",
  flexDirection: "column",
  gap: 16,
};
