import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ListTable } from "../../../../shared/components/list-table/index";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export function Category() {
  const navigate = useNavigate()
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"} gap={2}>
      <Grid item xs={6} container gap={1}>
        <Grid item>
          <IconButton onClick={() => navigate(-1)}>

            <KeyboardArrowLeftIcon color="primary"></KeyboardArrowLeftIcon>
          </IconButton></Grid>
        <Grid item>  <Typography variant="h4">  Categoria</Typography></Grid>

      </Grid>

      <Grid item xs={6}>
        <ListTable></ListTable>
      </Grid>
    </Grid>
  );
}
