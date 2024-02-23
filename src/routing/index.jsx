import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from '@/views/layout/index'
import Signin from '@/pages/signin';
import SignUp from '@/pages/signup';
import { useAuth } from '@/Backend/Context/AuthContext';
import Dashboard from '@/views/dashboard';
import Quotes from '@/views/quotes';
// import { AuthProvider } from "./Backend/Context/AuthContext";
import ProtectedRoutes from './protected';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function Routing() {
    const { isAuthenticated,token } = useAuth();
  return (
    <div>
       <CssBaseline />
          {  token ? (
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <ProtectedRoutes path="/dashboard" element={<Dashboard />} />
                <ProtectedRoutes path="/quotes" element={<Quotes />} />
              </Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          )}
    </div>
  )
}

export default Routing
