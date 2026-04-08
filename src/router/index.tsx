import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Landing from "../pages/Landing/Landing";
import Course from "../pages/Course/Course";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: ":id", element: <Course /> },
      ],
    },
  ],
  {
    basename: "/learning-platform/",
  },
);
export default router;
