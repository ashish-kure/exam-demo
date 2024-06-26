import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST } from "../../constants/apiConstants";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import resetPasswordFields from "../../description/resetPassword";
import { RESET_PASSWORD } from "../../constants/nameConstants";
import { resetForm } from "../../redux/slices/formSlice";
import api from "../../redux/actions/apiAction";

const ResetPasswordContainer = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    return () => dispatch(resetForm());
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: "users/ResetPassword",
      method: POST,
      data: formData,
    };

    if (validateForm(resetPasswordFields) && !checkExistingErrors()) {
      await dispatch(api({ name: RESET_PASSWORD, config }));
      dispatch(resetForm());
    }
  };

  return {
    handleSubmit,
    resetPasswordFields,
    loading: loading[RESET_PASSWORD],
  };
};

export default ResetPasswordContainer;
