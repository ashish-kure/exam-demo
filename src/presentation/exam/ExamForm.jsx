import { Fragment } from "react";
import { button, submit } from "../../constants/formConstants";
import ExamFormContainer from "../../container/Exam/ExamFormContainer";
import FormField from "../../presentation/FormField";
import CustomButton from "../../shared/CustomButton";

const ExamForm = ({ fields, totalQuestions, onSubmit }) => {
  const {
    step,
    maxStep,
    formData,
    errors,
    questionFields,
    subjectFields,
    handleChange,
    handleNext,
    handlePrevious,
    handleSubmit,
    handleCancel,
  } = ExamFormContainer({ fields, totalQuestions, onSubmit });

  const navigationButtons = [
    {
      type: button,
      label: "< Prev",
      onClick: handlePrevious,
      disabled: step === 0,
    },

    {
      type: button,
      label: "Next >",
      onClick: handleNext,
      disabled: maxStep === step,
    },
  ];

  const actionButtons = [
    {
      type: submit,
      label: "Submit",
      onClick: handleSubmit,
      disabled: maxStep !== step,
    },

    {
      type: button,
      label: "Cancel",
      onClick: handleCancel,
    },
  ];

  return (
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
                  ? `Question ${step + 1}`
                  : attributes.label,
            }}
          />
          <span style={errorStyle}>{errors[attributes?.name]}</span>
        </Fragment>
      ))}

      <section>
        <div>
          {navigationButtons.map((button, ind) => (
            <CustomButton key={ind} {...button} />
          ))}
        </div>
        <div>
          {actionButtons.map((button, ind) => (
            <CustomButton key={ind} {...button} />
          ))}
        </div>
      </section>
    </form>
  );
};

export default ExamForm;

const errorStyle = {
  fontSize: 14,
  color: "indianred",
};
