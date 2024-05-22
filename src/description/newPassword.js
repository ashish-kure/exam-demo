import { password, submit, text } from "../constants/formConstants";

const newPasswordFields = [
  {
    type: password,
    label: "Password",
    name: "Password",
    isRequired: true,
    message: "Password must have at least 6 characters",
  },

  {
    type: text,
    label: "Confirm Password",
    name: "ConfirmPassword",
    isRequired: true,
    message: "Passwords are not matching!",
  },

  {
    type: submit,
    label: "Submit",
  },
];

export default newPasswordFields;
