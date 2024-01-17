import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { CardItemProps, CardTable } from "../../../../shared/components/card-table/index";
import StyledDialog from "../../../../shared/components/dialog/index";
import { CategoryForm } from "../../category/form/index";
import { AccountForm } from "../form/index";

export function Accounts() {
  const [list, setList] = useState<CardItemProps[]>(Array(10).fill({
    id: 1,
    name: "Banco Inter",
    consumption: 100.00,
    percentage: 5,

  }))
  const [openDialog, setOpenDialog] = useState(true)
  const onCreate = () => {
    setOpenDialog(true)
  }

  const onClose = () => {
    setOpenDialog(false)
  }
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Grid item xs={6}>
        <Typography variant="h4">Contas</Typography>
      </Grid>

      <Grid item xs={6}>
        <CardTable onCreate={onCreate} list={list} itemRoute="/categoria/"></CardTable>
      </Grid>
      <StyledDialog openProps={openDialog} onClose={onClose} onConfirm={onClose} title="Nova Conta">
        <AccountForm></AccountForm></StyledDialog>
    </Grid>
  );
}
