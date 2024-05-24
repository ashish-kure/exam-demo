import { setError } from "../redux/slices/formSlice";
import store from "../redux/store";
import { capitalize, objectKeys } from "./javascript";
import {
  confirmPasswordValidation,
  emailValidation,
  nameValidation,
  passwordValidation,
} from "./regex";

export const validate = (name, value, compare) => {
  switch (name.toLowerCase()) {
    case "name":
      return nameValidation(value);

    case "password":
    case "oldpassword":
      return passwordValidation(value);

    case "email":
      return emailValidation(value);

    case "confirmpassword":
      return confirmPasswordValidation(value, compare);

    default:
      return true;
  }
};

// Form Validation
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

// Check Existing Errors
export const checkExistingErrors = () => {
  const { errors } = store.getState().form;
  return objectKeys(errors).length !== 0;
};
