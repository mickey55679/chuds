// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isAdmin, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
