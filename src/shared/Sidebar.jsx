import React, { Profiler } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUserInfo } from "../redux/slices/userSlice";
import { resetForm, setIsEdit } from "../redux/slices/formSlice";
import CustomButton from "./CustomButton";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

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

  const iconsMapping = {
    exams: <EditNoteOutlinedIcon />,
    results: <ArticleOutlinedIcon />,
    profile: <SentimentSatisfiedAltOutlinedIcon />,
    account: <AccountBoxOutlinedIcon />,
  };

  return (
    <Drawer variant="permanent" sx={sidebarStyle}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <List>
          {fields.map(({ url, label }) => (
            <ListItem key={label} component={Link} to={url} divider>
              {iconsMapping[url]} 
              <ListItemButton disableRipple>
                <ListItemText primary={label} sx={{ color: "black" }} />
                <EastOutlinedIcon color="action" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ p: 4, m: "auto" }}>
          <CustomButton
            label="Sign Out"
            onClick={handleSignOut}
            startIcon={<LogoutOutlinedIcon />}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

const sidebarStyle = {
  [`& .MuiDrawer-paper`]: { width: 200, boxSizing: "border-box" },
};
