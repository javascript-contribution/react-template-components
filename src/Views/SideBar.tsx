import React from 'react';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
          style={{
            padding: "10px",
            width: "20%",
            height: "100vh",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, textDecoration: "none" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stepIndex">Stepper</Link>
            </li>
            <li>
              <Link to="/rsuite-stepper">rsuite Stepper</Link>
            </li>
          </ul>
        </div>
  )
}

export default SideBar


