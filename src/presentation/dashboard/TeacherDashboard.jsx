import React from "react";
import Sidebar from "../../shared/Sidebar";
import teacherSidebarFields from "../../description/teacherSidebar";

const TeacherDashboard = () => {
  return <Sidebar fields={teacherSidebarFields} />;
};

export default TeacherDashboard;
