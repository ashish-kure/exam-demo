import { Fragment } from "react";
import { button } from "../../constants/formConstants";
import ExamFormContainer from "../../container/Exam/ExamFormContainer";
import FormField from "../../presentation/FormField";
import CustomButton from "../../shared/CustomButton";

const ExamForm = () => {
  const {
    step,
    formData,
    errors,
    questionFields,
    subjectFields,
    handleChange,
    handleNext,
    handlePrevious,
  } = ExamFormContainer();

  return (
    <section style={examFormStyle}>
      <form>
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
              attributes={attributes}
              formData={formData}
              onChange={(event) => handleChange(event, step)}
            />

            <span style={errorStyle}>{errors[attributes?.name]}</span>
          </Fragment>
        ))}

        <CustomButton label="Prev" type={button} onClick={handlePrevious} />
        <CustomButton label="Next" type={button} onClick={handleNext} />
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
