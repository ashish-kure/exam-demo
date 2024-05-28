import { radio, text } from "../constants/formConstants";

// Generating Options and Text Field
const generateOptions = (i) => {
  const optionFields = [];
  const radioDescriptor = Array.from({ length: 4 }, (_, j) => [
    {
      type: radio,
      name: `options`,
      options: [{ label: "", value: `optionText${j}` }],
      isRequired: true,
    },

    {
      type: text,
      name: `optionText${j}`,
      isRequired: true,
    },
  ]);

  radioDescriptor.forEach((array) => optionFields.push(...array));
  return optionFields;
};

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

    {
      type: text,
      name: `answer`,
      label: "Answer",
      isRequired: true,
    },

    ...generateOptions(1),
  ],
};

export default createExamFields;

// ...Array.from({ length: 15 }, (_, ind) => [
//   {
//     type: text,
//     name: `question${ind}`,
//     label: "Question",
//     isRequired: true,
//   },

//   {
//     type: text,
//     name: `answer${ind}`,
//     label: "Answer",
//     isRequired: true,
//   },

//   ...generateOptions(ind),
// ]),
