import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router/dom";

import router from "./router/index.tsx";

import { AppProvider } from "./context/context.tsx";

import "./styles/_global.scss";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>,
);
