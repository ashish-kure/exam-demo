import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { objectKeys, objectValues } from "../../utils/javascript";
import { addExam, removeExam } from "../../redux/slices/teacherSlice";
import {
  clearAllErrors,
  clearError,
  onChange,
  populateForm,
  resetForm,
  setError,
  setIsEdit,
} from "../../redux/slices/formSlice";
import {
  checkExistingErrors,
  validate,
  validateForm,
} from "../../utils/validation";

const ExamFormContainer = ({ fields, totalQuestions, onSubmit }) => {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const exam = useSelector((state) => state.teacher.exam);
  const { formData, errors, isEdit } = useSelector((state) => state.form);

  const maxStep = totalQuestions ? totalQuestions - 1 : 14;
  const questionFields = fields.questions;
  const subjectFields = fields.subject;

  // Structures current Exam Data!
  const configureFormData = useCallback(
    (data, step) => {
      const { subjectName, notes, questions } = data;
      const { options, answer, ...otherFields } = questions[step] ?? [];

      const optionValues =
        options?.reduce((acc, option, ind) => {
          acc[`optionValue${ind}`] = option;
          return acc;
        }, {}) ?? {};

      const option = objectKeys(optionValues)?.find(
        (key) => optionValues[key] === answer
      );

      const formDataObject = {
        subjectName,
        option,
        notes: notes[step],
        ...optionValues,
        ...otherFields,
      };

      dispatch(populateForm(formDataObject));
    },
    [dispatch]
  );

  useEffect(() => {
    if (exam.questions.length) {
      configureFormData(exam, step);
    }
    return () => dispatch(resetForm());
  }, [exam, step, searchParams, configureFormData, dispatch]);

  // Structures current FormData!
  const configureExam = () => {
    const { notes, subjectName, option, question } = formData;
    const copyOfExam = structuredClone(exam);

    const options = objectKeys(formData)
      .filter((key) => key.includes("optionValue"))
      .map((key) => formData[key]);

    const answer = formData[option];
    const questionObject = { answer, options, question };

    copyOfExam.subjectName = subjectName;
    copyOfExam.questions[step] = questionObject;
    copyOfExam.notes[step] = notes ?? "";

    return copyOfExam;
  };

  // Validation of Options!
  const validateOptions = (currentValue) => {
    const optionValues = objectKeys(formData)
      .filter((option) => option.includes("optionValue"))
      .map((option) => formData[option]);

    return !optionValues.includes(currentValue);
  };

  // Check, if option is selected?
  const isOptionChecked = () => {
    !formData.option && alert("Please select an Answer!");
    return formData.option;
  };

  // On Change Handler!
  const handleChange = (event, error) => {
    const { name, value } = event.target;
    const errorMessage = error || "This Field is Invalid";

    dispatch(onChange({ name, value }));

    // Validation
    const isValid = name.includes("optionValue")
      ? validateOptions(value)
      : validate(name, value);

    value && !isValid
      ? dispatch(setError({ name, error: errorMessage }))
      : dispatch(clearError(name));
  };

  const saveCurrentStep = (fields) => {
    if (
      validateForm(fields, true) &&
      !checkExistingErrors() &&
      isOptionChecked()
    ) {
      const structuredExam = configureExam();
      dispatch(addExam(structuredExam));
      dispatch(resetForm());
      return structuredExam;
    }
  };

  // Handle Next!
  const handleNext = () => {
    const questions = questionFields.reduce((acc, unit) => {
      acc.push(...(Array.isArray(unit) ? unit : [unit]));
      return acc;
    }, []);

    if (saveCurrentStep(questions)) {
      setStep((prev) => (prev < maxStep ? prev + 1 : prev));
    }
  };

  // Handle Previous
  const handlePrevious = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : prev));
    dispatch(clearAllErrors());
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const structuredExam = saveCurrentStep(objectValues(fields).flat());
    if (structuredExam) {
      const resultantExam = {
        ...structuredExam,
        notes: structuredExam?.notes?.filter(Boolean),
      };

      const result = await onSubmit(resultantExam);

      // Reset States!
      if (result) {
        setStep(0);
        dispatch(removeExam());
        dispatch(setIsEdit(false));
      }
    }
  };

  const handleCancel = () => {
    setStep(0);
    dispatch(resetForm());
    dispatch(removeExam());
    dispatch(setIsEdit(false));
  };

  return {
    step,
    isEdit,
    maxStep,
    formData,
    errors,
    handleChange,
    handleNext,
    handlePrevious,
    handleSubmit,
    handleCancel,
    subjectFields,
    questionFields,
  };
};

export default ExamFormContainer;
