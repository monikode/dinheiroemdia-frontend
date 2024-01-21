import { Box } from "@mui/material";
import { useState } from "react";
import "./index.css"

export function PrivateContainer(props) {
  const [sidebarWidth, setSidebarWidth] = useState(200);
  function Sidebar() {
    return (
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: `${sidebarWidth}px`,
        }}
      >

        <Box className="icon">
          DD
        </Box>
        <Box className="links">
          <Box >Visão Geral</Box>
          <Box >Categorias</Box>
          <Box >Contas</Box>
        </Box>

        <Box className="logout">
          Sair
        </Box>

      </Box>
    );
  }

  return (
    <Box
      className="container"
    >
      <Box className="sidebar" >
        <Sidebar />

      </Box>
      <Box item xs={1} className="navbar">
        navbar
      </Box>
      <Box
        item
        container
        xs={10}
        sx={{ backgroundColor: "#F2F4F8", padding: "3rem 4rem", height: "100%" }}
        className="content"
      >
        {props.children}
      </Box>
    </Box>
  );
}
