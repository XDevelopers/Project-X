import React from "react";
import { Navigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    // toast.error("Please Login First");l
    return <Navigate to="/login" replace />; 
  }

  return children;
};

export default ProtectedRoutes;