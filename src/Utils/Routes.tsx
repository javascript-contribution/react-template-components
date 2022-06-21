import { lazy, Suspense } from "react";
import logo from '../logo.svg';
import RsuiteStepper from '../Views/Stepper/Library'
import StepIndex from '../Views/Stepper/Custom';
const About = lazy(() => import('../Components/About'));
const Contact = lazy(() => import('../Components/Contact'));

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
    },
    {
      path: "/about",
      main: () => (
        <Suspense fallback={<>...</>}>
          <About />
        </Suspense>
      )
    },
    {
      path: "/contact",
      main: () => (
        <Suspense fallback={<>...</>}>
          <Contact />
        </Suspense>
      )
    }
  ];

  export default routes;