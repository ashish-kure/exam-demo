import { Fragment } from "react";
import { button, submit } from "../../constants/formConstants";
import ExamFormContainer from "../../container/Exam/ExamFormContainer";
import FormField from "../../presentation/FormField";
import CustomButton from "../../shared/CustomButton";
import { Typography } from "@mui/material";

const ExamForm = ({ fields, totalQuestions, onSubmit }) => {
  const {
    step,
    isEdit,
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
      label: !isEdit ? "Submit" : "Update",
      onClick: handleSubmit,
      disabled: maxStep !== step,
    },

    {
      type: button,
      label: "Cancel",
      onClick: handleCancel,
      style: { display: isEdit ? "none" : "initial" },
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

          <Typography variant="subtitle" component="h4" color="error.light">
            {errors[attributes?.name]}
          </Typography>
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

          <Typography variant="subtitle" component="h4" color="error.light">
            {errors[attributes?.name]}
          </Typography>
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
