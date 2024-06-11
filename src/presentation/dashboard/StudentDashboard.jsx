import { Outlet } from "react-router-dom";
import Sidebar from "../../shared/Sidebar";
import Toolbar from "../../shared/Toolbar";
import studentSidebarFields from "../../description/studentSidebar";
import { Box, Grid } from "@mui/material";

const StudentDashboard = () => {
  return (
    <Box component="main" sx={{ overflow: "auto" }}>
      <Toolbar />
      <Sidebar fields={studentSidebarFields} />
      <Grid
        py={1}
        mt={10}
        ml={30}
        display="grid"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 80px)"
        overflow="auto"
      >
        <Outlet />
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
