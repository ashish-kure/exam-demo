import { email, submit } from "../constants/formConstants";

const forgotPasswordFields = [
  {
    type: email,
    label: "Email",
    name: "email",
    placeholder: "hello@host.domain",
    isRequired: true,
    message: "Please enter Email in valid format!",
  },

  {
    type: submit,
    label: "Send Email",
  },
];

export default forgotPasswordFields;
