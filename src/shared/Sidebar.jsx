import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUserInfo } from "../redux/slices/userSlice";
import { resetForm, setIsEdit } from "../redux/slices/formSlice";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Sidebar = ({ fields }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    if (window.confirm("Do you really want to sign out?")) {
      dispatch(resetForm());
      dispatch(setIsEdit(false));
      dispatch(removeUserInfo());
      navigate("/sign-in");
    }
  };

  return (
    <Drawer variant="permanent" sx={sidebarStyle}>
      <List>
        {fields.map(({ url, label }) => (
          <ListItem alignItems="center" key={label}>
            <ListItemText>
              <Link to={url}>{label}</Link>
            </ListItemText>
          </ListItem>
        ))}

        <ListItem>
          <ListItemButton>
            <CustomButton label="Sign Out" onClick={handleSignOut} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

const sidebarStyle = {
  // width: "drawerWidth",
};
