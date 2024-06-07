import { setError } from "../redux/slices/formSlice";
import store from "../redux/store";
import { capitalize, objectKeys } from "./javascript";
import {
  confirmPasswordValidation,
  emailValidation,
  nameValidation,
  passwordValidation,
  questionValidation,
} from "./regex";

export const validate = (name, value, compare) => {
  switch (name.toLowerCase()) {
    case "name":
      return nameValidation(value);

    case "email":
      return emailValidation(value);

    case "password":
    case "oldpassword":
      return passwordValidation(value);

    case "confirmpassword":
      return confirmPasswordValidation(value, compare);

    case "question":
      return questionValidation(value);

    default:
      return true;
  }
};

// Form Validation
export const validateForm = (formFields, commonMessage) => {
  const { formData } = store.getState().form;
  const dispatch = store.dispatch;

  let valid = true;

  formFields.forEach(({ name, isRequired }) => {
    if (isRequired && !formData[name]) {
      dispatch(
        setError({
          name,
          error: commonMessage
            ? "This Field is Required"
            : `${capitalize(name)} is Required`,
        })
      );
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
