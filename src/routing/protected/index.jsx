import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "@/Backend/Context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
