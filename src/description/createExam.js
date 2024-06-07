import { radio, text } from "../constants/formConstants";

const createExamFields = {
  subject: [
    {
      type: text,
      name: "subjectName",
      label: "Subject",
      isRequired: true,
    },
  ],

  questions: [
    {
      type: text,
      name: "notes",
      label: "Note",
    },

    {
      type: text,
      name: "question",
      label: "Question",
      isRequired: true,
      message: "Question should not be same",
    },

    ...Array.from({ length: 4 }, (_, j) => [
      {
        type: radio,
        name: "option",
        options: [{ label: "", value: `optionValue${j}` }],
      },

      {
        type: text,
        name: `optionValue${j}`,
        label: `${String.fromCharCode(65 + j)}.`,
        message: "Options should be unique!",
        isRequired: true,
      },
    ]),
  ],
};

export default createExamFields;
