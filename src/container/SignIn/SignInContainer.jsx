import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signInFields from "../../description/signIn";
import { resetForm } from "../../redux/slices/formSlice";
import api from "../../redux/actions/apiAction";
import { POST, SIGN_IN_EP, SUCCESS_CODE } from "../../constants/apiConstants";
import { SIGN_IN } from "../../constants/nameConstants";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { getLocalStorage } from "../../utils/javascript";
import { isLoggedIn } from "../../utils/authentication";

const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const loading = useSelector((state) => state.api.loading);
  const { statusCode, message } = useSelector(
    (state) => state.api.data[SIGN_IN] || ""
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
      url: SIGN_IN_EP,
      data: formData,
      method: POST,
    };

    if (validateForm(signInFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: SIGN_IN, config }));
      const { data, statusCode } = response?.payload?.data ?? {};

      if (statusCode === SUCCESS_CODE) {
        navigate(`/${data?.role}`);
      }

      dispatch(resetForm());
    }
  };

  return {
    message,
    statusCode,
    signInFields,
    handleSubmit,
    loading: loading[SIGN_IN],
  };
};

export default SignInContainer;
