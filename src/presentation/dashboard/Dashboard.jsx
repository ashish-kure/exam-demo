import React from "react";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";

const Dashboard = ({ role, children }) => {
  return role === "teacher" ? (
    <TeacherDashboard outlet={children} />
  ) : (
    <StudentDashboard outlet={children} />
  );
};

export default Dashboard;
