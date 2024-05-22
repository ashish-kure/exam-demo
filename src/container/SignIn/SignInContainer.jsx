import { useDispatch, useSelector } from "react-redux";
import signInFields from "../../description/signIn";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { resetForm } from "../../redux/slices/formSlice";
import { POST } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { signIn } from "../../constants/nameConstants";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { statusCode, message } = useSelector(
    (state) => state.api.data?.signIn || ""
  );
  const { loading } = useSelector((state) => state.api);

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      url: "users/Login",
      data: formData,
      method: POST,
    };

    if (validateForm(signInFields) && !checkExistingErrors()) {
      dispatch(api({ name: signIn, config }));
      dispatch(resetForm());
    }
  };

  return {
    handleSubmit,
    signInFields,
    statusCode,
    message,
    loading: loading.signIn,
  };
};

export default SignInContainer;
