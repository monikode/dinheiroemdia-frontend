import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

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
    element: <div>Hello world!</div>,
  },
  {
    path: "/cadastro",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <div>Hello world!</div>,
  },
  {
    path: "/perfil",
    element: <div>Hello world!</div>,
  },
  {
    path: "/categorias",
    element: <div>Hello world!</div>,
  },
  {
    path: "/categoria/:id",
    element: <div>Hello world!</div>,
  },
  {
    path: "/contas",
    element: <div>Hello world!</div>,
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
