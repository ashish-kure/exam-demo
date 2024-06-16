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
import { equal } from "../../utils/javascript";

const ProfileContainer = () => {
  const [profile, setProfile] = useState({});
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: GET_PROFILE_EP };

      const response = await dispatch(
        api({ name: PROFILE, config, toast: false })
      );
      const { data } = response?.payload?.data ?? {};

      setProfile(data);
      setInput(data?.name);
    };

    fetchAPI();
  }, [dispatch]);

  const handleEdit = () => setEdit(true);

  const handleNameChange = (event) => setInput(event.target.value);

  const handleCancel = () => {
    setEdit(false);
    setInput(profile?.name);
  };

  const handleUpdate = async () => {
    if (equal(profile?.name, input)) {
      setEdit(false);
      return null;
    }

    const config = {
      method: PUT,
      url: UPDATE_PROFILE_EP,
      data: { name: input },
    };

    const response = await dispatch(api({ name: UPDATE_PROFILE, config }));
    const { statusCode, data } = response?.payload?.data ?? {};

    if (equal(statusCode, SUCCESS_CODE)) {
      setProfile(data);
      setEdit(false);
    }
  };

  return {
    edit,
    input,
    profile,
    handleEdit,
    handleCancel,
    handleUpdate,
    handleNameChange,
    loading: loading[PROFILE],
    updateLoading: loading[UPDATE_PROFILE],
  };
};

export default ProfileContainer;
