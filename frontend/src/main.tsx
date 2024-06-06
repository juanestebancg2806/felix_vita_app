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
import Progress from "./pages/Progress/Progress.tsx";
import Messages from "./pages/Messages/Messages.tsx";
import Login from "./pages/Login/Login.tsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<DashboardLayout />}>
      <Route path="" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="messages" element={<Messages />} />
      <Route path="recommend" element={<Recommend />} />
      <Route path="patients" element={<Patients />} />
      <Route path="progress" element={<Progress />} />
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
