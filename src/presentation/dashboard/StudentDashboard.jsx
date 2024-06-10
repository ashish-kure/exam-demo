import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../shared/Sidebar";
import Toolbar from "../../shared/Toolbar";
import studentSidebarFields from "../../description/studentSidebar";
import { Box } from "@mui/material";

const StudentDashboard = () => {
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
        <Sidebar fields={studentSidebarFields} />
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default StudentDashboard;
