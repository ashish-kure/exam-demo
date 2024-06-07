import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/authentication";
import { getLocalStorage } from "../utils/javascript";
import Dashboard from "../presentation/dashboard/Dashboard";

const ProtectedRoute = ({ role }) => {
  const currentRole = getLocalStorage("role");

  if (!isLoggedIn()) {
    return <Navigate to="/sign-in" />;
  }

  if (role && role !== currentRole) {
    return <Navigate to={`/${currentRole}`} />;
  }

  return <Dashboard role={currentRole} />;
};

export default ProtectedRoute;
