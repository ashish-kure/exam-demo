import { radio, text } from "../constants/formConstants";

// Main Descriptor!
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
      name: `question`,
      label: "Question",
      isRequired: true,
    },

    // {
    //   type: text,
    //   name: `answer`,
    //   label: "Answer",
    //   isRequired: true,
    //   message: "Answer should be same as Options!",
    // },

    ...Array.from({ length: 4 }, (_, j) => [
      {
        type: radio,
        name: `option`,
        options: [{ label: "", value: `optionValue${j}` }],
      },

      {
        type: text,
        name: `optionValue${j}`,
        isRequired: true,
        message: "Options should be unique!",
      },
    ]).flat(),
  ],
};

export default createExamFields;
