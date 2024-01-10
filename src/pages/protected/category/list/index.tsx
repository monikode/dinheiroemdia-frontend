import { Grid, Typography } from "@mui/material";
import { CardTable } from "../../../../shared/components/card-table/index";

export function Categories() {
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
        <Grid item xs={6}>
          <Typography variant="h4">Categorias</Typography>
        </Grid>

        <Grid item xs={6}>
          <CardTable></CardTable>
        </Grid>
    </Grid>
  );
}
