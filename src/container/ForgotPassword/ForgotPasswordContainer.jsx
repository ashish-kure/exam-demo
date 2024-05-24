import { useDispatch, useSelector } from "react-redux";
import api from "../../redux/actions/apiAction";
import { POST } from "../../constants/apiConstants";
import forgotPasswordFields from "../../description/forgotPassword";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { FORGOT_PASSWORD } from "../../constants/nameConstants";

const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);
  const { statusCode, message } = useSelector(
    (state) => state.api.data[FORGOT_PASSWORD] || ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: POST,
      url: "users/ForgotPassword",
      data: formData,
    };

    if (validateForm(forgotPasswordFields) && !checkExistingErrors()) {
      dispatch(api({ name: FORGOT_PASSWORD, config }));
    }
  };

  return {
    message,
    statusCode,
    handleSubmit,
    forgotPasswordFields,
    loading: loading[FORGOT_PASSWORD],
  };
};

export default ForgotPasswordContainer;
