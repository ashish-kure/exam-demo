import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../shared/ErrorPage";
import SignUp from "../presentation/SignUp";
import SignIn from "../presentation/SignIn";
import NewPassword from "../presentation/NewPassword";
import Homepage from "../presentation/dashboard/Homepage";
import ForgotPassword from "../presentation/ForgotPassword";
import AllStudents from "../presentation/teacher/AllStudents";
import VerifiedStudents from "../presentation/teacher/VerifiedStudents";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "*", element: <ErrorPage /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/newPassword", element: <NewPassword /> },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "teacher",
          element: <ProtectedRoute role="teacher" />,
          children: [
            { path: "", element: <Homepage /> },
            { path: "all-students", element: <AllStudents /> },
            { path: "verified-students", element: <VerifiedStudents /> },
          ],
        },

        {
          path: "student",
          element: <ProtectedRoute role="student" />,
          children: [
            { path: "", element: <Homepage /> },
            { path: "all-exams", element: <h1>View All Exams</h1> },
          ],
        },
      ],
    },
  ]);

  return <>{routes}</>;
};

export default AppRoutes;
