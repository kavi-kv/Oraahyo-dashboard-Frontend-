import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../compos/Navbar";

// import Sidebar, { SidebarItem } from "./components/Sidebar";
// import Sidebar from "../../compos/Sidebar";
import NavSidebar from "../../compos/NavSidebar";
function index() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <Box display="block" width="100%" height="100%">
      <NavSidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default index;
