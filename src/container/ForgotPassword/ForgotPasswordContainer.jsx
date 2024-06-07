import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../redux/actions/apiAction";
import { FORGOT_PASS_EP, POST } from "../../constants/apiConstants";
import forgotPasswordFields from "../../description/forgotPassword";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { FORGOT_PASSWORD } from "../../constants/nameConstants";
import { resetForm } from "../../redux/slices/formSlice";
import { isLoggedIn } from "../../utils/authentication";
import { getLocalStorage } from "../../utils/javascript";

const ForgotPasswordContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/${getLocalStorage("role")}`);
    }
    return () => dispatch(resetForm());
  }, [dispatch, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      method: POST,
      url: FORGOT_PASS_EP,
      data: formData,
    };

    if (validateForm(forgotPasswordFields) && !checkExistingErrors()) {
      await dispatch(api({ name: FORGOT_PASSWORD, config }));
      dispatch(resetForm());
    }
  };

  return {
    handleSubmit,
    forgotPasswordFields,
    loading: loading[FORGOT_PASSWORD],
  };
};

export default ForgotPasswordContainer;
