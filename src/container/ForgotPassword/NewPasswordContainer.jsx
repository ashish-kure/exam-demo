import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import newPasswordFields from "../../description/newPassword";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { NEW_PASSWORD } from "../../constants/nameConstants";
import { resetForm } from "../../redux/slices/formSlice";

const NewPasswordContainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);
  const { statusCode, message } = useSelector(
    (state) => state.api.data[NEW_PASSWORD] || ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: "users/ForgotPassword/Verify",
      method: POST,
      data: formData,
      params: {
        token: searchParams.get("token"),
      },
    };

    if (validateForm(newPasswordFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: NEW_PASSWORD, config }));

      if (response?.payload?.data?.statusCode === SUCCESS_CODE) {
        alert("Your Password Changed Successfully!");
        navigate("/sign-in");
      }

      dispatch(resetForm());
    }
  };

  return {
    message,
    statusCode,
    handleSubmit,
    newPasswordFields,
    loading: loading[NEW_PASSWORD],
  };
};

export default NewPasswordContainer;
