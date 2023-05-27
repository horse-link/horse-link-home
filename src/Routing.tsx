import { AppRoutes } from "./types/app";
import { lazy } from "react";
import Landing from "./pages/Landing";

const Verify = lazy(() => import("./pages/Verify"));
const Signup = lazy(() => import("./pages/Signup"));
const Terms = lazy(() => import("./pages/Terms"));
// const Social = lazy(() => import("./pages/Social"));
const Tournament = lazy(() => import("./pages/Tournament"));
const Register = lazy(() => import("./pages/Register"));

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/verify",
    element: <Verify />
  },
  {
    path: "/verify/:code",
    element: <Verify />
  },
  {
    path: "/terms",
    element: <Terms />
  },
  {
    path: "/tournament",
    element: <Tournament />
  },
  {
    path: "/register",
    element: <Register />
  }
];

export default Routing;
