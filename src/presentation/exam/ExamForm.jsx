import { button, submit } from "../../constants/formConstants";
import ExamFormContainer from "../../container/Exam/ExamFormContainer";
import FormField from "../../presentation/FormField";
import CustomButton from "../../shared/CustomButton";
import { Box, ButtonGroup, Stack } from "@mui/material";
import ErrorMessage from "../../shared/ErrorMessage";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { equal } from "../../utils/javascript";

const ExamForm = ({ fields, totalQuestions, onSubmit, loading }) => {
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
      onClick: handlePrevious,
      disabled: equal(step, 0),
      label: <ArrowBackIosNewOutlinedIcon />,
      variant: "text",
    },

    {
      type: button,
      onClick: handleNext,
      disabled: equal(maxStep, step),
      label: <ArrowForwardIosOutlinedIcon />,
      variant: "text",
    },
  ];

  const actionButtons = [
    {
      type: submit,
      label: !isEdit ? "Submit" : "Update",
      onClick: handleSubmit,
      disabled: loading || !equal(maxStep, step),
      variant: "outlined",
      loading,
      loaderColor: "dodgerblue",
    },

    {
      type: button,
      label: "Cancel",
      onClick: handleCancel,
      style: { display: isEdit ? "none" : "initial" },
      color: "error",
      variant: "outlined",
    },
  ];

  const renderQuestions = (attributes) => (
    <Stack spacing={1} key={attributes.name}>
      <FormField
        formData={formData}
        onChange={handleChange}
        attributes={{
          ...attributes,
          label: equal(attributes.name, "question")
            ? `Question ${step + 1}`
            : attributes.label,
        }}
      />
      <ErrorMessage>{errors[attributes?.name]}</ErrorMessage>
    </Stack>
  );

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} sx={containerStyle}>
          <Stack spacing={2}>
            {subjectFields.map((attributes, ind) => (
              <Stack spacing={1} key={ind}>
                <FormField
                  {...{ attributes, formData, onChange: handleChange }}
                />
                <ErrorMessage>{errors[attributes?.name]}</ErrorMessage>
              </Stack>
            ))}
          </Stack>

          <Stack spacing={2}>
            {questionFields.map((attributes, ind) => (
              <Stack direction="row" key={ind}>
                {Array.isArray(attributes)
                  ? attributes.map((fields) => renderQuestions(fields))
                  : renderQuestions(attributes)}
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems="center" mt={2}>
          <ButtonGroup component="section">
            {navigationButtons.map((button, ind) => (
              <CustomButton key={ind} {...button} />
            ))}
          </ButtonGroup>

          <Stack direction="row" spacing={2}>
            {actionButtons.map((button, ind) => (
              <CustomButton key={ind} {...button} />
            ))}
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default ExamForm;

const containerStyle = {
  p: 4,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
};
