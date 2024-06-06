import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardLayout from "./features/DashboardLayout/DashboardLayout.tsx";
import Home from "./pages/Home/Home.tsx";
import Recommend from "./pages/Recommend/Recommend.tsx";
import { ToastContainer } from "react-toastify";
import Patients from "./pages/Patients/Patients.tsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<DashboardLayout />}>
      <Route path="" element={<Home />} />
      <Route path="recommend" element={<Recommend />} />
      <Route path="patients" element={<Patients />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer /> {/*To show toast anywhere*/}
  </React.StrictMode>
);
