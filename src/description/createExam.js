import { radio, text } from "../constants/formConstants";
import CustomInput from "../shared/CustomInput";

const createExamFields = {
  subjectName: {
    type: text,
    name: "subjectName",
    label: "Subject",
    placeholder: "Mathematics",
    isRequired: true,
  },

  questions: [...Array(15)].map(() => [
    {
      type: text,
      name: "question",
      label: "Question",
      isRequired: true,
    },
  ]),
};

export default createExamFields;
