import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledButton } from "../../../../shared/components/button";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import IconWhite from "../../../../shared/assets/svg/icon_white.svg";

export function PrivateContainer(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarWidth, setSidebarWidth] = useState(200);

  const logout = () => {
    localStorage.removeItem("dd-authenticated");
    localStorage.removeItem("dd-token");
    navigate("/login");
  };
  function Sidebar() {
    return (
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: `${sidebarWidth}px`,
        }}
      >
        <Box className="icon">
          <img src={IconWhite} alt="Dinheiro em dia" />
        </Box>
        <Box className="links">
          <Box
            className={location.pathname.includes("/home") ? "active" : ""}
            onClick={() => navigate("/home")}
          >
            Visão Geral
          </Box>
          <Box
            className={location.pathname.includes("/categoria") ? "active" : ""}
            onClick={() => navigate("/categorias")}
          >
            Categorias
          </Box>
          <Box
            className={location.pathname.includes("/conta") ? "active" : ""}
            onClick={() => navigate("/contas")}
          >
            Contas
          </Box>
        </Box>

        <Box className="logout">
          <StyledButton variant="contained" onClick={() => logout()}>
            <LogoutIcon className="icon"></LogoutIcon>Sair
          </StyledButton>
        </Box>
      </Box>
    );
  }

  return (
    <Box className="container">
      <Box className="sidebar">
        <Sidebar />
      </Box>
      <Box className="navbar">
        <IconButton size="large" onClick={() => navigate("/perfil")}>
          <AccountCircleTwoToneIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F2F4F8",
          padding: "3rem 4rem",
          height: "100%",
        }}
        className="content"
      >
        {props.children}
      </Box>
    </Box>
  );
}
