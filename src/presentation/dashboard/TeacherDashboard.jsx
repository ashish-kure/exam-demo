import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../shared/Sidebar";
import Toolbar from "../../shared/Toolbar";
import teacherSidebarFields from "../../description/teacherSidebar";
import { Box } from "@mui/material";

const TeacherDashboard = () => {
  return (
    <Fragment>
      <Box
        component="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ overflow: "auto" }}
      >
        <Toolbar />
        <Sidebar fields={teacherSidebarFields} />
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default TeacherDashboard;
