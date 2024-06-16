import React from "react";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import { equal } from "../../utils/javascript";

const Dashboard = ({ role }) => {
  return equal(role, "teacher") ? <TeacherDashboard /> : <StudentDashboard />;
};

export default Dashboard;
