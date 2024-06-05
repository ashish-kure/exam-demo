import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signUpFields from "../../description/singUp";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { resetForm } from "../../redux/slices/formSlice";
import { POST, SIGN_UP_EP, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { SIGN_UP } from "../../constants/nameConstants";
import { isLoggedIn } from "../../utils/authentication";
import { getLocalStorage } from "../../utils/javascript";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form.formData);
  const loading = useSelector((state) => state.api.loading);
  const { statusCode, message } = useSelector(
    (state) => state.api.data[SIGN_UP] || ""
  );

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/${getLocalStorage("role")}`);
    }

    return () => dispatch(resetForm());
  }, [dispatch, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: SIGN_UP_EP,
      data: formData,
      method: POST,
    };

    if (validateForm(signUpFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: SIGN_UP, config }));
      const { statusCode } = response?.payload?.data ?? {};

      if (statusCode === SUCCESS_CODE) {
        alert("Please, Check you mail box for verification!");
        navigate("/sign-in");
      }

      dispatch(resetForm());
    }
  };

  return {
    message,
    statusCode,
    signUpFields,
    handleSubmit,
    loading: loading[SIGN_UP],
  };
};

export default SignUpContainer;
