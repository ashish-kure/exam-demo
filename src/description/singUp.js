import {
  text,
  email,
  password,
  select,
  submit,
} from "../constants/formConstants";

const signUpFields = [
  {
    type: text,
    label: "Name",
    name: "name",
    placeholder: "Hello User",
    isRequired: true,
    message: "Please, do not enter numbers and special characters!",
  },

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
    type: select,
    label: "Role",
    name: "role",
    isRequired: true,
    options: [
      { label: "Student", value: "student" },
      { label: "Teacher", value: "teacher" },
    ],
  },

  {
    type: submit,
    label: "Sign Up",
  },
];

export default signUpFields;
