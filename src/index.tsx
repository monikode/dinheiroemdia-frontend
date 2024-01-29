import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Login } from "./pages/public/login";
import { SignUp } from "./pages/public/signup";
import { Dashboard } from "./pages/protected/dashboard";
import { PrivateContainer } from "./pages/protected/components/container";
import { Perfil } from "./pages/protected/perfil";
import { Categories } from "./pages/protected/category/list/index";
import { Category } from "./pages/protected/category/view/index";
import { Accounts } from "./pages/protected/accounts/list/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userOperations } from "./api/user";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  let user = localStorage.getItem("dd-authenticated");
  userOperations
  .getByToken()
  .then((res) => {
    
    localStorage.setItem("dd-authenticated", "true");
    localStorage.setItem("dd-user", JSON.stringify(res.data));
  })
  .catch((e) => {
    user = null
  });

  if (!user) {
    return <Navigate to={`/login`} replace />;
  }

  return <PrivateContainer>{children}</PrivateContainer>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace={true} />,
  },
  {
    path: "/design-system",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/perfil",
    element: (
      <ProtectedRoute>
        <Perfil />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categorias",
    element: (
      <ProtectedRoute>
        <Categories />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categoria/:id",
    element: (
      <ProtectedRoute>
        <Category />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contas",
    element: (
      <ProtectedRoute>
        <Accounts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/conta/:id",
    element: (
      <ProtectedRoute>
        <Accounts />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
