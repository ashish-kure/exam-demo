import React from "react";
import { Link } from "react-router-dom";
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
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { logOut } from "../utils/javascript";

const sidebarIcons = {
  exams: <EditNoteOutlinedIcon color="action" />,
  results: <ArticleOutlinedIcon color="action" />,
  profile: <SentimentSatisfiedAltOutlinedIcon color="action" />,
  account: <AccountBoxOutlinedIcon color="action" />,
  "create-exam": <PlaylistAddOutlinedIcon color="action" />,
  "all-students": <SchoolOutlinedIcon color="action" />,
};

const Sidebar = ({ fields }) => {
  const handleSignOut = () => {
    if (window.confirm("Do you really want to sign out?")) logOut();
  };

  return (
    <Drawer variant="permanent" sx={sidebarStyle}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <ListItem divider sx={{ py: 2, textAlign: "center" }}>
          <ListItemText>EXAM DEMO</ListItemText>
        </ListItem>
        <List>
          {fields.map(({ url, label }) => (
            <ListItem key={label} component={Link} to={url} divider>
              {sidebarIcons[url]}
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
  [`& .MuiDrawer-paper`]: { width: 225, boxSizing: "border-box" },
};
