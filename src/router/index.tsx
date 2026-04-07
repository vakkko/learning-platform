import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Landing from "../pages/Landing/Landing";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Landing /> }],
    },
  ],
  {
    basename: "/learning-platform/",
  },
);
export default router;
