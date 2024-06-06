import { Fragment } from "react";
import Sidebar from "../../shared/Sidebar";
import teacherSidebarFields from "../../description/teacherSidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

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
        <Sidebar fields={teacherSidebarFields} />
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default TeacherDashboard;
