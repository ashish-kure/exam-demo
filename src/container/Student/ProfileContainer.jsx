import { useDispatch, useSelector } from "react-redux";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
};

export default ProfileContainer;
