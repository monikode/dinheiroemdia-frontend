import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ListTable } from "../../../../shared/components/list-table/index";
import { SpentForm } from "../../spents";
import { Spent } from "../../../../api/spent";
import { useState } from "react";
import { useParams } from "react-router";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


export function Category() {
  let { id } = useParams();

  const [spentDialog, setSpentDialog] = useState(false);

  const onCreate = () => {
    setSpentDialog(true);
  };
  
  const onSpentClose = (spent:Spent) => {
    // getList()
    setSpentDialog(false);
  }
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
        <ListTable onCreate={onCreate}></ListTable>
      </Grid>

      <SpentForm categoryId={id} open={spentDialog} setOpen={setSpentDialog} onClose={onSpentClose}></SpentForm>

    </Grid>
  );
}
