import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardLayout from "./features/DashboardLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<DashboardLayout />}>
      <Route path="recommend" element={<p>Recommend</p>} />
      <Route path="*" element={<p>Page not found</p>} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
