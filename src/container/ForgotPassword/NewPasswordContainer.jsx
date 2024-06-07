import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import newPasswordFields from "../../description/newPassword";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { NEW_PASS_EP, POST, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { NEW_PASSWORD } from "../../constants/nameConstants";
import { resetForm } from "../../redux/slices/formSlice";
import { isLoggedIn } from "../../utils/authentication";
import { getLocalStorage } from "../../utils/javascript";

const NewPasswordContainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/${getLocalStorage("role")}`);
    }
    return () => dispatch(resetForm());
  }, [dispatch, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      url: NEW_PASS_EP,
      method: POST,
      data: formData,
      params: { token: searchParams.get("token") },
    };

    if (validateForm(newPasswordFields) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: NEW_PASSWORD, config }));
      const { statusCode } = response?.payload?.data ?? {};

      statusCode === SUCCESS_CODE && navigate("/sign-in");
      dispatch(resetForm());
    }
  };

  return {
    handleSubmit,
    newPasswordFields,
    loading: loading[NEW_PASSWORD],
  };
};

export default NewPasswordContainer;
