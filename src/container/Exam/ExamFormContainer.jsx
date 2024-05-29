import { useCallback, useEffect, useState } from "react";
import createExamFields from "../../description/createExam";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  clearAllErrors,
  clearError,
  onChange,
  populateForm,
  resetForm,
  setError,
  setIsEdit,
} from "../../redux/slices/formSlice";
import { addExam } from "../../redux/slices/teacherSlice";
import { objectKeys, objectValues } from "../../utils/javascript";
import { radio } from "../../constants/formConstants";
import {
  checkExistingErrors,
  validate,
  validateForm,
} from "../../utils/validation";
import api from "../../redux/actions/apiAction";
import { CREATE_EXAM } from "../../constants/nameConstants";
import { POST, PUT } from "../../constants/apiConstants";
import { useSearchParams } from "react-router-dom";

const ExamFormContainer = ({ fields, totalQuestions }) => {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { formData, errors, isEdit } = useSelector((state) => state.form);

  const maxStep = totalQuestions ? totalQuestions - 1 : 14;
  const exam = useSelector((state) => state.teacher.exam);

  const validateOptions = (value, isAnswer) => {
    let valid = true;

    const optionTextsArray = objectKeys(formData)
      .filter((field) => field.includes("optionText"))
      .map((field) => formData[field]);

    switch (isAnswer) {
      case true: {
        if (!optionTextsArray.includes(value)) {
          valid = false;
        }
        return valid;
      }
      case !isAnswer: {
        if (optionTextsArray.includes(value)) {
          valid = false;
        }
        return valid;
      }

      default:
        return valid;
    }
  };

  // Next & Previous Helper!
  const populateFormData = useCallback(
    (data, step) => {
      const { subjectName, notes, questions } = data;
      const { options, answer, ...otherFields } = questions[step] ?? [];
      const optionTexts = options?.reduce((acc, option, ind) => {
        acc[`optionText${ind}`] = option;
        return acc;
      }, {});

      const option =
        optionTexts &&
        objectKeys(optionTexts)?.find((key) => optionTexts[key] === answer);

      const formDataObject = {
        subjectName,
        answer,
        option,
        notes: notes[step],
        ...optionTexts,
        ...otherFields,
      };

      dispatch(populateForm(formDataObject));
    },
    [dispatch]
  );

  useEffect(() => {
    populateFormData(exam, step);
  }, [exam, populateFormData, step]);

  // On Change Handler!
  const handleChange = (event, error) => {
    const { name, value, type, checked } = event.target;
    const errorMessage = error || "This Field is Invalid";

    dispatch(onChange({ name, value }));

    // Change Answer based on Radio!
    if (type === radio && checked) {
      dispatch(onChange({ name: "answer", value: formData[value] }));
    }

    // Change Radio based on Answer!
    if (name === "answer") {
      dispatch(
        onChange({
          name: "option",
          value: objectKeys(formData).find((key) => formData[key] === value),
        })
      );
    }

    // Validation
    const isValid = name.includes("optionText")
      ? validateOptions(value, false)
      : name.includes("answer")
      ? validateOptions(value, true)
      : validate(name, value);

    value && !isValid
      ? dispatch(setError({ name, error: errorMessage }))
      : dispatch(clearError(name));
  };

  // Handle Next!
  const handleNext = () => {
    const nextStep = step < maxStep ? step + 1 : step;

    if (
      validateForm(createExamFields.questions, true) &&
      !checkExistingErrors()
    ) {
      setStep(nextStep);
      populateFormData(exam, nextStep);
      dispatch(addExam({ formData, step }));
      dispatch(resetForm());
    }
  };

  // Handle Previous
  const handlePrevious = () => {
    const prevStep = step > 0 ? step - 1 : step;

    setStep(prevStep);
    populateFormData(exam, prevStep);
    dispatch(clearAllErrors());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allFields = objectValues(createExamFields).reduce((acc, array) => {
      acc.push(...array);
      return acc;
    }, []);

    if (validateForm(allFields) && !checkExistingErrors()) {
      dispatch(addExam({ formData, step }));

      const config = {
        method: isEdit ? PUT : POST,
        url: isEdit ? "dashboard/Teachers/editExam" : "dashboard/Teachers/Exam",
        params: isEdit ? { id: searchParams.get("id") } : {},
        data: exam,
      };

      const response = await dispatch(api({ name: CREATE_EXAM, config }));
      const { statusCode, message } = response?.payload?.data;

      if (statusCode === 200) {
        alert(message);
        dispatch(resetForm());
        dispatch(setIsEdit(false));
      }
    }
  };

  return {
    step,
    maxStep,
    formData,
    errors,
    handleChange,
    handleNext,
    handlePrevious,
    handleSubmit,
    subjectFields: fields.subject,
    questionFields: fields.questions,
  };
};

export default ExamFormContainer;
