import { createBrowserRouter } from "react-router-dom";

import { Dinger } from "../pages/Dinger";
import { Home } from "../pages/Home";
import { LandingPage } from "../pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/start",
    element: <LandingPage />,
  },
  {
    path: "/dinger",
    element: <Dinger />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
