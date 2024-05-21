import React from "react";
import { useRoutes } from "react-router-dom";
import First from "../container/First";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <First /> },
    { path: "/login", element: <h2>LOG IN</h2> },
    { path: "/sign-up", element: <h1>SIGN UP</h1> },
    {
      element: <ProtectedRoute />,
      children: [{ path: "page", element: <h1>Hello</h1> }],
    },
  ]);

  return routes;
};

export default Routing;
