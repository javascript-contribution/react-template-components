import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteComponent from "./Utils/Routes";
import SideBar from "./Components/SideBar";
import "./Styles/App.css";
import AppBar from "./Components/AppBar";
import BottomBar from "./Components/BottomBar";
import EditSpeedDial from "./Components/EditSpeedDial";
import { Box, Button, Grid } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function App() {
  const ref = useRef();

  const [pos, setPos] = useState(false);

  const handleTop = () => {
    ref.current.scrollTop = 0;
    setPos(false);
  };

  const handleScroll = () => {
    if (ref.current.scrollTop > 10) {
      if (!pos) setPos(true);
    } else {
      if (pos) setPos(false);
    }
  };

  useEffect(() => {
    const temp = ref.current;
    temp.addEventListener("scroll", handleScroll);
    return () => temp.removeEventListener("scroll", handleScroll);
  });

  return (
    <Router>
      <AppBar />
      <Box
        style={{
          display: "flex",
          overflow: "auto",
          scrollBehavior: "smooth",
          height: 700,
        }}
        ref={ref}
      >
        <SideBar />
        <div style={{ flex: 2, padding: "100px" }}>
          <Routes>
            {RouteComponent.map((route, index) => (
              <Route key={index} path={route.path} element={<route.main />} />
            ))}
          </Routes>
          <Button
            style={{
              position: "fixed",
              bottom: 100,
              right: 100,
              display: pos ? "block" : "none",
            }}
            color={"secondary"}
            variant={"outlined"}
            onClick={handleTop}
          >
            <ExpandLessIcon />
          </Button>
        </div>
        <EditSpeedDial />
      </Box>
      <BottomBar />
    </Router>
  );
}
