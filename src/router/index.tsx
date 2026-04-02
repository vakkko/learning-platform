import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
    },
  ],
  {
    basename: "/learning-platform/",
  },
);
export default router;
