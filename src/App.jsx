import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QuotesContext } from "./Backend/Context/QuotesContext";
import Dashboard from "./views/dashboard";
import Quotes from "./views/quotes";
import Layout from "./views/layout/index";
import Navbar from "./compos/Navbar";
import Sidebar, { SidebarItem } from "./compos/Sidebar";
// import Sidebar from "./components/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import Signin from "./views/signin";
import SignUp from "./views/signup";
import { useAuth } from "./Backend/Context/AuthContext";
import { AuthProvider } from "./Backend/Context/AuthContext";
import ProtectedRoutes from "./routing/protected";
function App() {
  const { isAuthenticated, token } = useAuth();

  return (
    <div>
      <BrowserRouter>
        <CssBaseline />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/quotes"
              element={
                <ProtectedRoutes>
                  <Quotes />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>

        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
