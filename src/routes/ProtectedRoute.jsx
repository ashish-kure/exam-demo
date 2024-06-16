import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/authentication";
import { equal, getLocalStorage } from "../utils/javascript";
import Dashboard from "../presentation/dashboard/Dashboard";

const ProtectedRoute = ({ role }) => {
  const currentRole = getLocalStorage("role");

  if (!isLoggedIn()) {
    return <Navigate to="/sign-in" />;
  }

  if (role && !equal(role, currentRole)) {
    return <Navigate to={`/${currentRole}`} />;
  }

  if (role) {
    return <Dashboard role={currentRole} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
