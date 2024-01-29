import { Grid, Typography } from "@mui/material";
import { ListTable } from "../../../../shared/components/list-table/index";
import { SpentForm } from "../../spents";
import { Spent } from "../../../../api/spent";
import { useState } from "react";
import { useParams } from "react-router";

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
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Grid item xs={6}>
        <Typography variant="h4">Categoria</Typography>
      </Grid>

      <Grid item xs={6}>
        <ListTable onCreate={onCreate}></ListTable>
      </Grid>

      <SpentForm categoryId={id} open={spentDialog} setOpen={setSpentDialog} onClose={onSpentClose}></SpentForm>

    </Grid>
  );
}
