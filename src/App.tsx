import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteComponent from "./Utils/Routes";
import SideBar from "./Components/SideBar";
import "./Styles/App.css";
import AppBar from "./Components/AppBar";
import BottomBar from "./Components/BottomBar";
import EditSpeedDial from "./Components/EditSpeedDial";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", scrollBehavior: "smooth" }}>
        <AppBar />
        <SideBar />
        <div className={"components"}>
          <Routes>
            {RouteComponent.map((route, index) => (
              <Route key={index} path={route.path} element={<route.main />} />
            ))}
          </Routes>
        </div>
        <EditSpeedDial />
        <BottomBar />
      </Box>
    </Router>
  );
}
