import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUserInfo } from "../redux/slices/userSlice";
import CustomButton from "./CustomButton";

const Sidebar = ({ fields }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(removeUserInfo());
    navigate("/sign-in");
  };

  return (
    <nav style={sidebarStyle}>
      {fields.map(({ url, label }) => (
        <Link key={label} to={url}>
          {label}
        </Link>
      ))}
      <CustomButton label="Sign Out" onClick={handleSignOut} />
    </nav>
  );
};

export default Sidebar;

const sidebarStyle = {
  padding: 20,
  width: "fit-content",
  border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  gap: 20,
};
