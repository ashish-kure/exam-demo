import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/authentication";
import { getLocalStorage } from "../utils/javascript";

const ProtectedRoute = () => {
  const role = getLocalStorage("role");

  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
