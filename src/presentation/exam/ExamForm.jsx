import { Fragment } from "react";
import { button, submit } from "../../constants/formConstants";
import ExamFormContainer from "../../container/Exam/ExamFormContainer";
import FormField from "../../presentation/FormField";
import CustomButton from "../../shared/CustomButton";

const ExamForm = ({ fields, totalQuestions }) => {
  const {
    currentStep,
    maxStep,
    formData,
    errors,
    questionFields,
    subjectFields,
    handleChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  } = ExamFormContainer({ fields, totalQuestions });

  return (
    <section style={examFormStyle}>
      <form onSubmit={handleSubmit}>
        {subjectFields.map((attributes, ind) => (
          <Fragment key={ind}>
            <FormField
              attributes={attributes}
              formData={formData}
              onChange={handleChange}
            />
            <span style={errorStyle}>{errors[attributes?.name]}</span>
          </Fragment>
        ))}

        {questionFields.map((attributes, ind) => (
          <Fragment key={ind}>
            <FormField
              formData={formData}
              onChange={handleChange}
              attributes={{
                ...attributes,
                label:
                  attributes.name === "question"
                    ? `Question ${currentStep + 1}`
                    : attributes.label,
              }}
            />
            <span style={errorStyle}>{errors[attributes?.name]}</span>
          </Fragment>
        ))}

        <section>
          <CustomButton
            label="Prev"
            type={button}
            onClick={handlePrevious}
            disabled={currentStep === 0}
          />
          <CustomButton
            label="Next"
            type={button}
            onClick={handleNext}
            disabled={maxStep === currentStep}
          />
          <CustomButton
            label="Submit"
            type={submit}
            disabled={maxStep !== currentStep}
          />
        </section>
      </form>
    </section>
  );
};

export default ExamForm;

const examFormStyle = {
  marginLeft: 150,
};

const errorStyle = {
  fontSize: 14,
  color: "indianred",
};
