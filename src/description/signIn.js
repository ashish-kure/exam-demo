import { email, password, submit } from "../constants/formConstants";

const signInFields = [
  {
    type: email,
    label: "Email",
    name: "email",
    placeholder: "hello@host.domain",
    isRequired: true,
    message: "Please enter Email in valid format!",
  },

  {
    type: password,
    label: "Password",
    name: "password",
    isRequired: true,
    message: "Password must have at least 6 characters",
  },

  {
    type: submit,
    label: "Sign In",
  },
];

export default signInFields;
