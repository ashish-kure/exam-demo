import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/authentication";

const ProtectedRoute = () => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
