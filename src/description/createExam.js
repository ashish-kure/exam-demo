import { radio, text } from "../constants/formConstants";

const createExamFields = {
  subject: [
    {
      type: text,
      name: "subjectName",
      label: "Subject",
      placeholder: "Mathematics",
      isRequired: true,
    },
  ],

  questions: [
    {
      type: text,
      name: "notes",
      label: "Notes",
    },

    {
      type: text,
      name: "question",
      label: "Question",
      isRequired: true,
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
        message: "Options should be unique!",
        isRequired: true,
      },
    ]).flat(),
  ],
};

export default createExamFields;
