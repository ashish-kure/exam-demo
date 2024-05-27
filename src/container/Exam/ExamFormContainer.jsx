import { capitalize } from "../../utils/javascript";
import { useDispatch, useSelector } from "react-redux";
import { clearError, onChange, setError } from "../../redux/slices/formSlice";
import { validate } from "../../utils/validation";
import createExamFields from "../../description/createExam";
import { useState } from "react";
import { radio, text } from "../../constants/formConstants";

const ExamFormContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const maxStep = createExamFields.questions.length - 1;
  const options = [...Array(4)].map((_, ind) => [
    {
      type: radio,
      name: "options",
      isRequired: true,
      value: formData?.questions?.[currentStep]?.options?.[ind],
      options: [
        {
          label: "",
          value: formData?.questions?.[currentStep]?.options?.[ind],
        },
      ],
    },

    {
      type: text,
      name: `answer${ind}`,
      value: formData?.questions?.[currentStep]?.options?.[ind],
      isRequired: true,
    },
  ]);

  const handleChange = (event, message) => {
    const { name, value } = event.target;
    const errorMessage = message ?? `${capitalize(name)} is Invalid!`;

    if (name === "question") {
      dispatch(onChange({ name: "questions", value }));
    } else {
      dispatch(onChange({ name, value }));
    }

    // Validate Field
    const isValid = validate(name, value);

    // Dispatch Error or Not
    value && !isValid
      ? dispatch(setError({ name, error: errorMessage }))
      : dispatch(clearError(name));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep < maxStep ? prevStep + 1 : prevStep
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return {
    options,
    formData,
    currentStep,
    handleNext,
    handleSubmit,
    handleChange,
    handlePrevious,
    fields: createExamFields,
  };
};

export default ExamFormContainer;
