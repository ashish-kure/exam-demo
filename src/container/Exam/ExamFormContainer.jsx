import { useState } from "react";
import createExamFields from "../../description/createExam";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onChange, resetForm } from "../../redux/slices/formSlice";
import { addExam } from "../../redux/slices/teacherSlice";

const ExamFormContainer = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.form);
  const exam = useSelector((state) => state.teacher.exam);

  const questionFields = createExamFields.questions;
  const maxStep = 15;

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(onChange({ name, value }));
  };

  const handleNext = () => {
    setStep((prev) => (prev < maxStep ? prev + 1 : prev));
    dispatch(addExam({ formData, step }));
    dispatch(resetForm());
  };

  const handlePrevious = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  return {
    step,
    formData,
    errors,
    handleChange,
    handleNext,
    handlePrevious,
    questionFields,
    subjectFields: createExamFields.subject,
  };
};

export default ExamFormContainer;
