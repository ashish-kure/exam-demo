import React from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../presentation/SignUp";
import SignIn from "../presentation/SignIn";
import ForgotPassword from "../presentation/ForgotPassword";
import NewPassword from "../presentation/NewPassword";

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <SignUp /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/newPassword", element: <NewPassword /> },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/teacher",
          element: <h1>Hello</h1>,
          children: [{ path: "in", element: <h1>Teacher</h1> }],
        },

        {
          path: "/student",
          element: <h1>Hello</h1>,
          children: [{ path: "in", element: <h1>Student</h1> }],
        },
      ],
    },
  ]);

  return <>{routes}</>;
};

export default Routing;
