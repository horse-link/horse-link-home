import { AppRoutes } from "./types/app";
import { lazy } from "react";
import Landing from "./pages/Landing";

const Verify = lazy(() => import("./pages/Verify"));
const Signup = lazy(() => import("./pages/Signup"));

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
  }
];

export default Routing;
