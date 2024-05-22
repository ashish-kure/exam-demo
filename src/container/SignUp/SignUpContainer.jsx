import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import signUpFields from "../../description/singUp";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import { resetForm } from "../../redux/slices/formSlice";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { signUp } from "../../constants/nameConstants";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formData } = useSelector((state) => state.form);
  const { statusCode } = useSelector((state) => state.api.data?.signUp || "");
  const { loading } = useSelector((state) => state.api);

  useEffect(() => {
    if (statusCode === SUCCESS_CODE) {
      navigate("/sign-in");
    }
  }, [navigate, statusCode]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      url: "users/SignUp",
      data: formData,
      method: POST,
    };

    if (validateForm(signUpFields) && !checkExistingErrors()) {
      dispatch(api({ name: signUp, config }));
      dispatch(resetForm());
    }
  };

  return { signUpFields, handleSubmit, loading: loading.signUp };
};

export default SignUpContainer;
