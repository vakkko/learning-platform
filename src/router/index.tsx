import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Landing from "../pages/Landing/Landing";
import Course from "../pages/Course/Course";
import Browse from "../pages/Browse/Browse";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: ":id", element: <Course /> },
        { path: "browse/:page", element: <Browse /> },
      ],
    },
  ],
  {
    basename: "/",
  },
);
export default router;
