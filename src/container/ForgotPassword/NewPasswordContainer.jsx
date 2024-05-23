import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import newPasswordFields from "../../description/newPassword";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { newPassword } from "../../constants/nameConstants";

const NewPasswordContainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { loading } = useSelector((state) => state.api);

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
      const response = await dispatch(api({ name: newPassword, config }));

      if (response?.payload?.data?.statusCode === SUCCESS_CODE) {
        alert("Your Password Changed Successfully!");
        navigate("/sign-in");
      }
    }
  };

  return { newPasswordFields, handleSubmit, loading: loading.newPassword };
};

export default NewPasswordContainer;
