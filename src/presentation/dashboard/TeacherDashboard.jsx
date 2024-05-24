import { Fragment } from "react";
import Sidebar from "../../shared/Sidebar";
import teacherSidebarFields from "../../description/teacherSidebar";

const TeacherDashboard = ({ outlet }) => {
  return (
    <Fragment>
      <Sidebar fields={teacherSidebarFields} />
      {outlet}
    </Fragment>
  );
};

export default TeacherDashboard;
