import { Box, Grid } from "@mui/material";
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
          minHeight: "100vh",
          boxSizing: "border-box",
          padding: "24px 32px",
          height: "100%"
        }}

        className="sidebar"
      >
        <Grid container item direction={"column"}  sx={{
          
          height: "100%"
        }}>
          <Grid item xs={1}>
            DD
          </Grid>
          <Grid container item xs={10} direction={"column"}>
            <Grid item>Visão Geral</Grid>
            <Grid item>Categorias</Grid>
            <Grid item>Contas</Grid>
          </Grid>

          <Grid item xs={1}>
            {" "}
            Sair
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Grid
      container
      direction={"row"}
      sx={{ width: "100vw", minHeight: "100vh"}}
    >
      <Grid item xs={"auto"}
      
      sx={{  minHeight: "100vh" }}
      >
        <Sidebar />
      </Grid>

      <Grid item xs={"auto"}>
        <Box
          sx={{
            maxWidth: `calc(100vw - ${sidebarWidth}px)`,
            minWidth: `calc(100vw - ${sidebarWidth}px)`,
            width: `calc(100vw - ${sidebarWidth}px)`,
          }}
        >
          <Grid container direction={"column"}  sx={{minHeight: "100vh" }}>
            <Grid item xs={1}>
              navbar
            </Grid>
            <Grid
              item
              container
              xs={10}
              sx={{ backgroundColor: "#F2F4F8", padding: "3rem 4rem", height: "100%" }}
            >
              {props.children}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
