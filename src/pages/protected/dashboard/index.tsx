import { Grid, Typography } from "@mui/material";
import { StyledButton } from "../../../shared/components/button";

export function Dashboard() {
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Grid container item>
        <Grid item xs={6}>
          <Typography variant="h4">Dashboard</Typography>
        </Grid>

        {/* <Grid item xs={6} justifyContent={"flex-end"}>
          <StyledButton sx={{marginLeft: "auto"}} variant="contained">Exportar relatório</StyledButton>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
