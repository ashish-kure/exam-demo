import React, { Fragment } from "react";
import FormField from "../FormField";
import ExamFormContainer from "../../container/Exam/ExamFormContainer";
import CustomChoices from "../../shared/CustomChoices";
import CustomInput from "../../shared/CustomInput";
import { radio, text } from "../../constants/formConstants";
import { current } from "@reduxjs/toolkit";

const ExamForm = () => {
  const {
    fields,
    options,
    formData,
    currentStep,
    handleNext,
    handleChange,
    handleSubmit,
    handlePrevious,
  } = ExamFormContainer();

  return (
    <section style={examFormStyle}>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Subject"
          name="subjectName"
          value={formData.subjectName}
          onChange={handleChange}
        />

        {fields.questions[currentStep].map((fields, ind) => {
          return (
            <Fragment key={ind}>
              <CustomInput
                {...fields}
                value={formData?.questions?.[currentStep][fields.name]}
                onChange={(event) => handleChange(event, currentStep)}
              />

              {options.map((element, ind) => (
                <section key={ind}>
                  {element.map((props, ind) =>
                    props.type === radio ? (
                      <CustomChoices {...props} />
                    ) : (
                      <CustomInput {...props} />
                    )
                  )}
                </section>
              ))}

              <CustomInput
                label="Answer"
                type={text}
                value={formData?.questions?.[currentStep].ans}
              />
            </Fragment>
          );
        })}
      </form>
    </section>
  );
};

export default ExamForm;

const examFormStyle = {
  marginLeft: 150,
};
