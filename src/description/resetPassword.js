import {
  confirmPassword,
  password,
  submit,
  text,
} from "../constants/formConstants";

const resetPasswordFields = [
  {
    type: password,
    label: "Old Password",
    name: "oldPassword",
    isRequired: true,
    message: "The password must contain at least six characters",
  },

  {
    type: password,
    label: "New Password",
    name: "Password",
    isRequired: true,
    message: "The password must contain at least six characters",
  },

  {
    type: text,
    label: "Confirm New Password",
    name: confirmPassword,
    isRequired: true,
    message: "Password is not matching!",
  },

  {
    type: submit,
    label: "Submit",
  },
];

export default resetPasswordFields;
