import { Grid, Typography } from "@mui/material";
import { ListTable } from "../../../../shared/components/list-table/index";

export function Category() {
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Grid item xs={6}>
        <Typography variant="h4">Categoria</Typography>
      </Grid>

      <Grid item xs={6}>
        <ListTable></ListTable>
      </Grid>
    </Grid>
  );
}
