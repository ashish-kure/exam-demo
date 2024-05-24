import { useDispatch, useSelector } from "react-redux";
import signInFields from "../../description/signIn";
import { resetForm } from "../../redux/slices/formSlice";
import api from "../../redux/actions/apiAction";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import { signIn } from "../../constants/nameConstants";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { useNavigate } from "react-router-dom";

const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);
  const { statusCode, message } = useSelector(
    (state) => state.api.data.signIn || ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: "users/Login",
      data: formData,
      method: POST,
    };

    if (validateForm(signInFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: signIn, config }));
      const { data, statusCode } = response?.payload?.data;

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
    loading: loading.signIn,
  };
};

export default SignInContainer;
