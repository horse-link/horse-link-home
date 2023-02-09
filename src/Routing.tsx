import { AppRoutes } from "./types/app";
import Landing from "./pages/Landing";

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Landing />
  }
];

export default Routing;
