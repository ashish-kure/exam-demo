import { useDispatch, useSelector } from "react-redux";
import api from "../../redux/actions/apiAction";
import { POST } from "../../constants/apiConstants";
import forgotPasswordFields from "../../description/forgotPassword";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { forgotPassword } from "../../constants/nameConstants";

const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);
  const { statusCode, message } = useSelector(
    (state) => state.api.data.forgotPassword || ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: POST,
      url: "users/ForgotPassword",
      data: formData,
    };

    if (validateForm(forgotPasswordFields) && !checkExistingErrors()) {
      dispatch(api({ name: forgotPassword, config }));
    }
  };

  return {
    message,
    statusCode,
    handleSubmit,
    forgotPasswordFields,
    loading: loading.forgotPassword,
  };
};

export default ForgotPasswordContainer;
