import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../presentation/FormField";
import CustomButton from "./CustomButton";
import {
  clearAllErrors,
  clearError,
  onChange,
  setError,
} from "../redux/slices/formSlice";
import {
  checkExistingErrors,
  validate,
  validateForm,
} from "../utils/validation";
import { capitalize } from "../utils/javascript";
import { button, confirmPassword, submit } from "../constants/formConstants";

const Form = ({ fields, onSubmit, onInputChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.form);

  const isMultiStep = fields?.some((unit) => Array.isArray(unit));
  const maxStep = isMultiStep ? fields.length - 1 : null;
  const currentFields = isMultiStep ? fields[currentStep] : fields;

  const handleChange = (event, message) => {
    const { name, value } = event.target;
    const errorMessage = message ?? `${capitalize(name)} is Invalid!`;

    dispatch(onChange({ name, value }));
    onInputChange && onInputChange(event);

    // Validate Field
    const isValid =
      name === confirmPassword
        ? validate(name, value, formData["Password"])
        : validate(name, value);

    // Dispatch Error or Not
    value && !isValid
      ? dispatch(setError({ name, error: errorMessage }))
      : dispatch(clearError(name));
  };

  const handleCheckbox = (event) => {
    const { value, name, checked } = event.target;
    const currentValues = formData[name] || [];

    // Updating Values based on check and uncheck
    const updatedValues = checked
      ? [...currentValues, value]
      : currentValues.filter((item) => item !== value);

    dispatch(onChange({ name, value: updatedValues }));
  };

  const handleNext = () => {
    if (validateForm(currentFields) && !checkExistingErrors()) {
      setCurrentStep((prev) => (prev < maxStep ? prev + 1 : prev));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
    dispatch(clearAllErrors());
  };

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      {currentFields?.map((attributes, ind) => (
        <section key={ind}>
          <FormField
            formData={formData}
            attributes={attributes}
            onChange={handleChange}
            onCheckbox={handleCheckbox}
          />

          <span style={errorStyle}>{errors[attributes?.name]}</span>
        </section>
      ))}

      {isMultiStep && (
        <section>
          <CustomButton
            type={button}
            label="Prev"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          />
          <CustomButton
            type={button}
            label="Next"
            onClick={handleNext}
            disabled={maxStep === currentStep}
          />
          <CustomButton
            type={submit}
            label="Submit"
            disabled={maxStep !== currentStep}
          />
        </section>
      )}
    </form>
  );
};

export default Form;

const errorStyle = {
  fontSize: 14,
  color: "indianred",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};
