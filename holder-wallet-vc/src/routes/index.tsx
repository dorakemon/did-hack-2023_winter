import { createBrowserRouter } from "react-router-dom";

import { Dinger } from "../pages/Dinger";
import { Home } from "../pages/Home";
import { LandingPage } from "../pages/LandingPage";
import { Qrcode } from "../pages/Qrcode";
import ChooseCredential from "../pages/ChooseCredential";
import SuccessScreen from "../pages/SuccessScreen";

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
  {
    path: "/qrcode",
    element: <Qrcode />,
  },
  {
    path: "/credential",
    element: <ChooseCredential />,
  },
  {
    path: "/success",
    element: <SuccessScreen />,
  },
]);
