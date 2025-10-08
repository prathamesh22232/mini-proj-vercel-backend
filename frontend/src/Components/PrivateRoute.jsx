import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // or any auth check logic

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
