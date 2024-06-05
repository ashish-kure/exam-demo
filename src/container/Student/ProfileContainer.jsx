import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../redux/actions/apiAction";
import { PROFILE, UPDATE_PROFILE } from "../../constants/nameConstants";
import {
  GET,
  PUT,
  SUCCESS_CODE,
  GET_PROFILE_EP,
  UPDATE_PROFILE_EP,
} from "../../constants/apiConstants";

const ProfileContainer = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: GET_PROFILE_EP };

      const response = await dispatch(api({ name: PROFILE, config }));
      const { data } = response?.payload?.data ?? {};

      setData(data);
      setInput(data?.name);
    };

    fetchAPI();
  }, [dispatch]);

  const handleEdit = () => setEdit(true);

  const handleNameChange = (event) => setInput(event.target.value);

  const handleCancel = () => {
    setEdit(false);
    setInput(data?.name);
  };

  const handleUpdate = async () => {
    const config = {
      method: PUT,
      url: UPDATE_PROFILE_EP,
      data: { name: input },
    };

    const response = await dispatch(api({ name: UPDATE_PROFILE, config }));
    const { statusCode, message, data } = response?.payload?.data ?? {};

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
    handleUpdate,
    handleNameChange,
    profile: data,
    loading: loading[PROFILE],
    updateLoading: loading[UPDATE_PROFILE],
  };
};

export default ProfileContainer;
