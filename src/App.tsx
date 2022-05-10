import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RsuiteStepper from './Views/Stepper/Library'
import StepIndex from './Views/Stepper/Custom';
import SideBar from './Views/SideBar';

 const routes = [
  {
    path: "/",
    main: () => <img src={logo} className="App-logo" alt="logo" />
  },
  {
    path: "/stepIndex",
    main: () => <StepIndex />
  },
  {
    path: "/rsuite-stepper",
    main: () => <RsuiteStepper />
  }
];


export default function App() {
  return (
    <> 
    <Router>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, padding: "10px" }}>
          <Routes>
            <> 
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.main />}
              />
            ))}
            </>
          </Routes>
        </div>


      </div>
    </Router>
    </>
  );
}

