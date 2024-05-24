import React from "react";
import Sidebar from "../../shared/Sidebar";
import studentSidebarFields from "../../description/studentSidebar";

const StudentDashboard = () => {
  return <Sidebar fields={studentSidebarFields} />;
};

export default StudentDashboard;
