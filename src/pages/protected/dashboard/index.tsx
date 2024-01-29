import { Box, Grid, Typography } from "@mui/material";
import { StyledButton } from "../../../shared/components/button";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { StyledCard } from "../../../shared/components/card";
import "./index.css";
import {
  Chart as ChartJS,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Pie, Bar, Chart, Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { LoginResponseUser } from "../../../api/user";
import { SpentForm } from "../spents";
import { CategoryForm } from "../category/form";
import { Spent } from "../../../api/spent";
import { AccountForm } from "../accounts/form";

function DashboardForms() {
  const [spentOpen, setSpentOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);



  const onClose = () => {};

  const onConfirmed = () => {};

  const actions = [
    {
      icon: <FileCopyIcon />,
      name: "Novo Gasto",
      onClick: () => setSpentOpen(true),
    },
    {
      icon: <SaveIcon />,
      name: "Nova Categoria",
      onClick: () => setCategoryOpen(true),
    },
    {
      icon: <PrintIcon />,
      name: "Nova Conta",
      onClick: () => setAccountOpen(true),
    },
  ];

  return (
    <>
      <CategoryForm
        open={categoryOpen}
        setOpen={setCategoryOpen}
        onClose={onClose}
        onConfirmed={onConfirmed}
      ></CategoryForm>

      <SpentForm
        open={spentOpen}
        setOpen={setSpentOpen}
        onClose={onClose}
      ></SpentForm>
      <AccountForm
        open={accountOpen}
        setOpen={setAccountOpen}
        onClose={onClose}
        onConfirmed={onConfirmed}
      />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 48, right: 64 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export function Dashboard() {
  const [name, setName] = useState("");
  useEffect(() => {
    const lsUser: LoginResponseUser = JSON.parse(
      localStorage.getItem("dd-user") ?? ""
    );
    if (lsUser) {
      setName(lsUser.name);
    }
  }, []);
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    BarController
  );

  return (
    <Grid
      container
      direction={"column"}
      flexWrap={"nowrap"}
      gap={3}
      className="dashboard"
    >
      <Grid container item>
        <Grid item container>
          <Grid item sx={{ flex: 1 }}>
            <Typography variant="h4">Suas despesas, Sr(a) {name}!</Typography>
          </Grid>
          <Grid item>
            <StyledButton variant="contained">Exportar relatório</StyledButton>
          </Grid>
        </Grid>
      </Grid>
      <StyledCard>
        <Box className="filter">
          <Box>Conta</Box>
          <Box>Categoria</Box>
          <Box> Data de Inicio</Box>
          <Box>Data de Fim</Box>
        </Box>
      </StyledCard>

      <Box className="charts">
        <StyledCard className="spents">
          Despesas
          <Line
            data={{
              labels: [
                "dfvdfv",
                "fdvhodhf",
                "fdvhodhf",
                "fdvhodhf",
                "fdvhodhf",
                "fdvhodhf",
                "fdvhodhf",
              ],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
            width={"100%"}
          ></Line>
        </StyledCard>

        <Box className="hor">
          <Box className="vert">
            <StyledCard className="categories">
              categories
              <Pie
                data={{
                  labels: ["dfvdfv", "fdvhodhf"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }}
                width={"100%"}
              ></Pie>
            </StyledCard>
            <StyledCard className="resume">
              resume
              <Bar
                data={{
                  labels: [
                    "dfvdfv",
                    "fdvhodhf",
                    "fdvhodhf",
                    "fdvhodhf",
                    "fdvhodhf",
                    "fdvhodhf",
                    "fdvhodhf",
                  ],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }}
                width={"100%"}
              ></Bar>
            </StyledCard>
          </Box>
          <StyledCard className="recents">recents</StyledCard>
        </Box>
      </Box>

      <DashboardForms />
    </Grid>
  );
}
