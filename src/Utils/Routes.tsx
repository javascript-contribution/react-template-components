import logo from '../logo.svg';
import RsuiteStepper from '../Views/Stepper/Library'
import StepIndex from '../Views/Stepper/Custom';

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

  export default routes;