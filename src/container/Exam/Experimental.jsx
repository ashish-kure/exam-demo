import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  clearAllErrors,
  clearError,
  onChange,
  populateForm,
  setError,
} from "../../redux/slices/formSlice";
import { objectKeys, objectValues } from "../../utils/javascript";
import {
  checkExistingErrors,
  validate,
  validateForm,
} from "../../utils/validation";

const ExamFormContainer = ({ fields, totalQuestions }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [multiFormData, setMultiFormData] = useState({
    subject: {},
    questions: {},
  });

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { formData, errors, isEdit } = useSelector((state) => state.form);

  const maxStep = totalQuestions ? totalQuestions - 1 : 14;
  // const maxStep = 3;

  // useEffect(() => {
  // dispatch(populateForm(multiFormData[currentStep ?? {}]));
  // console.log(multiFormData);
  // console.log(formData);
  // }, [multiFormData]);

  // Unique Option Validation!
  const validateOptions = (currentValue) => {
    const optionValues = objectKeys(formData)
      .filter((option) => option.includes("optionValue"))
      .map((option) => formData[option]);

    return !optionValues.includes(currentValue);
  };

  // Checking Option in Selected or Not!
  const isOptionChecked = () => {
    const isChecked = objectKeys(formData).find((key) => key === "option");
    !isChecked && alert("Please select an Answer!");
    return isChecked;
  };

  // Combine Form Data!
  const combineFormData = (step) => ({
    ...multiFormData.subject,
    ...multiFormData.questions[step],
  });

  // On Change Handler!
  const handleChange = (event, message) => {
    const { name, value } = event.target;
    const error = message || "This Fields is Invalid!";

    dispatch(onChange({ name, value }));

    if (fields.subject.some((fields) => fields.name === name)) {
      setMultiFormData((prev) => ({
        ...prev,
        subject: { ...prev.subject, [`${name}`]: value },
      }));
    }

    const isValid = name.includes("optionValue")
      ? validateOptions(value)
      : validate(name, value);

    value && !isValid
      ? dispatch(setError({ name, error }))
      : dispatch(clearError(name));
  };

  // On Next Handler!
  const handleNext = () => {
    const questionFields = fields.questions;
    const nextStep = currentStep < maxStep ? currentStep + 1 : currentStep;

    if (
      validateForm(questionFields, true) &&
      !checkExistingErrors() &&
      isOptionChecked()
    ) {
      setCurrentStep(nextStep);
      dispatch(populateForm(combineFormData(nextStep) ?? {}));
      setMultiFormData((prev) => ({
        ...prev,
        questions: { ...prev.questions, [`${currentStep}`]: formData },
      }));
    }
  };

  // On Previous Handler!
  const handlePrevious = () => {
    const prevStep = currentStep > 0 ? currentStep - 1 : currentStep;

    setCurrentStep(prevStep);
    dispatch(populateForm(combineFormData(prevStep)));
    dispatch(clearAllErrors());
  };

  // On Submit Handler!
  const handleSubmit = (event) => {
    event.preventDefault();

    const allFields = objectValues(fields).reduce((acc, unit) => {
      acc.push(...unit);
      return acc;
    }, []);

    if (
      validateForm(objectValues(allFields), true) &&
      !checkExistingErrors() &&
      isOptionChecked()
    ) {
      const finalData = {
        ...multiFormData,
        questions: { ...multiFormData.questions, [`${currentStep}`]: formData },
      };

      setMultiFormData(finalData);
      console.log(finalData);
    }
  };

  return {
    currentStep,
    maxStep,
    formData,
    errors,
    handleNext,
    handleChange,
    handlePrevious,
    handleSubmit,
    questionFields: fields.questions,
    subjectFields: fields.subject,
  };
};

export default ExamFormContainer;
