import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QuotesContext } from "./Backend/Context/QuotesContext";
import Dashboard from "./views/dashboard";
import Quotes from "./views/quotes";
import Layout from './views/layout/index'
import Navbar from "./components/Navbar";
import Sidebar, { SidebarItem } from "./components/Sidebar";
// import Sidebar from "./components/Sidebar";
import { Box, useMediaQuery } from "@mui/material"


function App() {
  return(
    <div>
      <BrowserRouter>
          <CssBaseline/>
          <Routes>
            <Route element = {<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace />}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/quotes" element={<Quotes/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>


  )



 
}

export default App;
