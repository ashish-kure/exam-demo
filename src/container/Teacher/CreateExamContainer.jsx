import createExamFields from "../../description/createExam";

const CreateExamContainer = () => {
  return {
    totalQuestions: 15,
    fields: createExamFields,
  };
};

export default CreateExamContainer;
