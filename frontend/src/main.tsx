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
import { AuthProvider } from "./services/authService/AuthContext.tsx";
import ProtectedRoute from "./features/ProtectedRoute/ProtectedRoute.tsx";

/**
 * Creates the router for the application and defines the routes.
 *
 * @returns The created router.
 */
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<DashboardLayout />}>
      <Route path="" element={<Login />} />
      <Route
        path="home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="messages"
        element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
        path="recommend"
        element={
          <ProtectedRoute>
            <Recommend />
          </ProtectedRoute>
        }
      />
      <Route
        path="patients"
        element={
          <ProtectedRoute>
            <Patients />
          </ProtectedRoute>
        }
      />
      <Route
        path="progress"
        element={
          <ProtectedRoute>
            <Progress />{" "}
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<p>Page not found</p>} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer /> {/*To show toast anywhere*/}
    </AuthProvider>
  </React.StrictMode>
);
