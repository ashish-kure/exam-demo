import { Fragment } from "react";
import Sidebar from "../../shared/Sidebar";
import studentSidebarFields from "../../description/studentSidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

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
        <Sidebar fields={studentSidebarFields} />
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default StudentDashboard;
