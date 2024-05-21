import React from "react";
import { useDispatch, useSelector } from "react-redux";
import signInFields from "../../description/signIn";
import Form from "../../shared/Form";
import auth from "../../redux/actions/authAction";
import { validateForm } from "../../utils/validation";
import { resetForm } from "../../redux/slices/formSlice";
import { objectKeys } from "../../utils/javascript";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.form);
  const { statusCode, message } = useSelector((state) => state.auth.data);

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingError = objectKeys(errors).length !== 0;

    if (validateForm(signInFields) && !existingError) {
      dispatch(auth({ url: "users/Login", data: formData }));
      dispatch(resetForm());
    }
  };

  return { signInFields, handleSubmit, statusCode, message };
};

export default SignInContainer;
// "react-hooks/rules-of-hooks": "off",
