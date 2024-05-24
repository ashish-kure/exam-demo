import { useDispatch, useSelector } from "react-redux";
import signUpFields from "../../description/singUp";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { resetForm } from "../../redux/slices/formSlice";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { SIGN_UP } from "../../constants/nameConstants";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);
  const { statusCode, message } = useSelector(
    (state) => state.api.data[SIGN_UP] || ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: "users/SignUp",
      data: formData,
      method: POST,
    };

    if (validateForm(signUpFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: SIGN_UP, config }));
      const { statusCode } = response?.payload?.data;

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
