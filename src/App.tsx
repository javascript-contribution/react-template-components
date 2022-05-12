import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteComponent from "./Utils/Routes";
import SideBar from "./Views/SideBar";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, padding: "10px" }}>
          <Routes>
            <>
              {RouteComponent.map((route, index) => (
                <Route key={index} path={route.path} element={<route.main />} />
              ))}
            </>
          </Routes>
        </div>
      </div>
    </Router>
  );
}