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
    message: "The password must contain at least six characters",
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
