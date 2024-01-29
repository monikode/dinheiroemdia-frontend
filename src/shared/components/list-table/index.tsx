import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import { Pagination } from "../../../../node_modules/@mui/material/index";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./index.css";
import { StyledCard } from "../card/index";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { StyledButton } from "../button";
import AddIcon from "@mui/icons-material/Add";

function ListItem() {
  return (
    <Box className="list-item">
      <Grid container direction="row" alignItems="center" gap={2}>
        <Grid item xs="auto" alignItems="center">
          {" "}
          <FastfoodIcon className="icon" />
        </Grid>
        <Grid
          item
          container
          xs="auto"
          direction="column"
          style={{ flexGrow: 1 }}
        >
          <Grid item>
            <Typography variant="h5">Alimentação</Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography>Alimentação • Conta Corrente Inter</Typography>
          </Grid>
        </Grid>
        <Grid item xs="auto">
          {" "}
          R$0.80
        </Grid>
        <Grid item xs="auto">
          {" "}
          <IconButton className="options">
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
export function ListTable() {
  const list = Array(3).fill({
    date: new Date().toLocaleDateString("en-GB"),
    list: Array(5).fill({
      id: 1,
      name: "Merenda do R.U.",
      account: "Conta Corrente Inter",
      category: "Alimentação",
      price: 0.8,
    }),
  });

  return (
    <StyledCard container direction={"column"} flexWrap={"nowrap"}>
      <Box className="list-grid">
        <Box className="grid-item">
          <Grid
            container
            item
            xs={"auto"}
            className="grid-item"
            alignItems={"center"}
            gap={2}
          >
            <Grid item>
              <StyledButton variant="contained">
                <AddIcon sx={{ fontSize: 30 }}></AddIcon>
              </StyledButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">Adicionar</Typography>
            </Grid>
          </Grid>
        </Box>

        {list.map((item) => {
          return (
            <Box>
              <Typography>{item.date.toString()}</Typography>
              <Box>
                {item.list.map((it) => {
                  return <ListItem></ListItem>;
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Grid item xs={"auto"} justifyContent={"flex-end"}>
        <Pagination count={10} color="primary" />
      </Grid>
    </StyledCard>
  );
}
