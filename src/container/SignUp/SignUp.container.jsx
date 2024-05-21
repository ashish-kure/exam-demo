import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../shared/Form";
import signUpFields from "../../description/singUp";
import { validateForm } from "../../utils/validation";
import { objectKeys } from "../../utils/javascript";
import auth from "../../redux/actions/authAction";
import { Link, useNavigate } from "react-router-dom";
import { resetForm } from "../../redux/slices/formSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formData, errors } = useSelector((state) => state.form);
  const { statusCode } = useSelector((state) => state.auth.data);

  useEffect(() => {
    if (statusCode === 200) {
      navigate("/sign-in");
    }
  }, [navigate, statusCode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingError = objectKeys(errors).length !== 0;
    if (validateForm(signUpFields) && !existingError) {
      dispatch(auth({ url: "/users/SignUp", data: formData }));
      dispatch(resetForm());
    }
  };

  return (
    <>
      <Form fields={signUpFields} onSubmit={handleSubmit} />
      <p>
        Already have an Account? <Link to="/sign-in">Sign in</Link>
      </p>
    </>
  );
};

export default SignUp;
