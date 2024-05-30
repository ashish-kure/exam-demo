import React from "react";
import GiveExamContainer from "../../container/Student/GiveExamContainer";
import Form from "../../shared/Form";

const GiveExam = () => {
  const { currentExam, questionFields, onInputChange, handleSubmit } =
    GiveExamContainer();

  return (
    <section style={style}>
      <h3>{currentExam.info.subject}</h3>
      <h4>
        {currentExam.info.notes.map((note, ind) => (
          <p key={ind}>{note}</p>
        ))}
      </h4>

      <Form
        fields={questionFields}
        onInputChange={onInputChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default GiveExam;

const style = {
  marginLeft: 150,
};
