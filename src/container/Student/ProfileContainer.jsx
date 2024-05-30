import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../redux/actions/apiAction";
import { GET, PUT, SUCCESS_CODE } from "../../constants/apiConstants";
import { PROFILE, UPDATE_PROFILE } from "../../constants/nameConstants";

const ProfileContainer = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "student/getStudentDetail" };

      const response = await dispatch(api({ name: PROFILE, config }));
      const { data } = response?.payload?.data;

      setData(data);
      setInput(data?.name);
    };

    fetchAPI();
  }, [dispatch]);

  const handleEdit = () => setEdit(true);

  const handleCancel = () => {
    setEdit(false);
    setInput(data?.name);
  };
  const handleNameChange = (event) => setInput(event.target.value);

  const handleUpdate = async () => {
    const config = {
      method: PUT,
      url: "student/studentProfile",
      data: { name: input },
    };

    const response = await dispatch(api({ name: UPDATE_PROFILE, config }));
    const { statusCode, message, data } = response?.payload?.data;

    if (statusCode === SUCCESS_CODE) {
      alert(message);
      setData(data);
      setEdit(false);
    }
  };

  return {
    edit,
    input,
    handleEdit,
    handleCancel,
    handleNameChange,
    handleUpdate,
    loading: loading[PROFILE],
    updateLoading: loading[UPDATE_PROFILE],
    profile: data,
  };
};

export default ProfileContainer;
