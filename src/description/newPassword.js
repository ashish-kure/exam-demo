import {
  text,
  submit,
  password,
  confirmPassword,
} from "../constants/formConstants";

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
    name: confirmPassword,
    isRequired: true,
    message: "Password is not matching!",
  },

  {
    type: submit,
    label: "Submit",
  },
];

export default newPasswordFields;
