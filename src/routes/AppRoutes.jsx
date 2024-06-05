import { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../shared/ErrorPage";
import SignUp from "../presentation/SignUp";
import SignIn from "../presentation/SignIn";
import NewPassword from "../presentation/NewPassword";
import Homepage from "../presentation/dashboard/Homepage";
import ForgotPassword from "../presentation/ForgotPassword";
import CreateExam from "../presentation/teacher/CreateExam";
import AllStudents from "../presentation/teacher/AllStudents";
import VerifiedStudents from "../presentation/teacher/VerifiedStudents";
import Student from "../presentation/teacher/Student";
import AllExams from "../presentation/student/AllExams";
import Exams from "../presentation/teacher/Exams";
import GiveExam from "../presentation/student/GiveExam";
import AllResults from "../presentation/student/AllResults";
import Profile from "../presentation/student/Profile";
import Result from "../presentation/student/Result";
import EditExam from "../presentation/teacher/EditExam";

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
            { path: "student", element: <Student /> },
            { path: "exams", element: <Exams /> },
            { path: "create-exam", element: <CreateExam /> },
            { path: "edit-exam", element: <EditExam /> },
          ],
        },

        {
          path: "student",
          element: <ProtectedRoute role="student" />,
          children: [
            { path: "", element: <Homepage /> },
            { path: "exams", element: <AllExams /> },
            { path: "give-exam", element: <GiveExam /> },
            { path: "results", element: <AllResults /> },
            { path: "result", element: <Result /> },
            { path: "profile", element: <Profile /> },
          ],
        },
      ],
    },
  ]);

  return <Fragment>{routes}</Fragment>;
};

export default AppRoutes;
