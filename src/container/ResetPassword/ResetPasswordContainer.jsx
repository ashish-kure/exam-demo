import { useDispatch, useSelector } from "react-redux";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import resetPasswordFields from "../../description/resetPassword";
import { RESET_PASSWORD } from "../../constants/nameConstants";
import { resetForm } from "../../redux/slices/formSlice";
import api from "../../redux/actions/apiAction";

const ResetPasswordContainer = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);
  const { statusCode, message } = useSelector(
    (state) => state.api.data[RESET_PASSWORD] || ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: "users/ResetPassword",
      method: POST,
      data: formData,
    };

    if (validateForm(resetPasswordFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: RESET_PASSWORD, config }));

      if (response?.payload?.data?.statusCode === SUCCESS_CODE) {
        alert("Your Password Changed Successfully!");
      }

      dispatch(resetForm());
    }
  };

  return {
    statusCode,
    message,
    handleSubmit,
    resetPasswordFields,
    loading: loading[RESET_PASSWORD],
  };
};

export default ResetPasswordContainer;
