import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Login } from "./pages/public/login";
import { SignUp } from "./pages/public/signup";
import { Dashboard } from "./pages/protected/dashboard";
import { PrivateContainer } from "./pages/protected/components/container";
import { Perfil } from "./pages/protected/perfil";
import { Categories } from "./pages/protected/category/list/index";
import { Category } from "./pages/protected/category/view/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
      <PrivateContainer>
        <Dashboard />
      </PrivateContainer>
    ),
  },
  {
    path: "/perfil",
    element: (
      <PrivateContainer>
        <Perfil />
      </PrivateContainer>
    ),
  },
  {
    path: "/categorias",
    element: <PrivateContainer>
    <Categories/>
  </PrivateContainer>,
  },
  {
    path: "/categoria/:id",
    element: <PrivateContainer>
    <Category/>
  </PrivateContainer>,
  },
  {
    path: "/contas",
    element: <PrivateContainer>
    <Categories/>
  </PrivateContainer>,
  },
  {
    path: "/conta/:id",
    element: <div>Hello world!</div>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
