import React from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../presentation/SignUp";
import SignIn from "../presentation/SignIn";

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <SignUp /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/sign-in", element: <SignIn /> },
    {
      element: <ProtectedRoute />,
      children: [{ path: "page", element: <h1>Hello</h1> }],
    },
  ]);

  return routes;
};

export default Routing;
