import { setError } from "../redux/slices/formSlice";
import store from "../redux/store";
import { capitalize } from "./javascript";
import { emailValidation, nameValidation, passwordValidation } from "./regex";

export const validate = (name, value) => {
  switch (name) {
    case "name":
      return nameValidation(value);

    case "password":
      return passwordValidation(value);

    case "email":
      return emailValidation(value);

    default:
      return true;
  }
};

export const validateForm = (formFields) => {
  const { formData } = store.getState().form;
  const dispatch = store.dispatch;

  let valid = true;

  formFields.forEach(({ name, isRequired }) => {
    if (isRequired && !formData[name]) {
      dispatch(setError({ name, error: `${capitalize(name)} is Required!` }));
      valid = false;
    }
  });

  return valid;
};
