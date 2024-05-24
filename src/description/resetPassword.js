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
    message: "Password must have at least 6 characters",
  },

  {
    type: password,
    label: "New Password",
    name: "Password",
    isRequired: true,
    message: "Password must have at least 6 characters",
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
