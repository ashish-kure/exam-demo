import { Fragment } from "react";
import Sidebar from "../../shared/Sidebar";
import studentSidebarFields from "../../description/studentSidebar";

const StudentDashboard = ({ outlet }) => {
  return (
    <Fragment>
      <Sidebar fields={studentSidebarFields} />
      {outlet}
    </Fragment>
  );
};

export default StudentDashboard;
