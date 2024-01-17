import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Button } from "../../../../../node_modules/@mui/material/index";
import { CardItemProps, CardTable } from "../../../../shared/components/card-table/index";
import StyledDialog from "../../../../shared/components/dialog/index";
import { CategoryForm } from "../form/index";

export function Categories() {
  const [list, setList] = useState<CardItemProps[]>(Array(10).fill({
    id: 1,
    name: "Alimentação",
    consumption: 100.00,
    percentage: 5,

  }))
  const [openDialog, setOpenDialog] = useState(false)
  const onCreate = () => {
    setOpenDialog(true)
  }

  const onClose = () => {
    setOpenDialog(false)
  }
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Grid item xs={6}>
        <Typography variant="h4">Categorias</Typography>
      </Grid>

      <Grid item xs={6}>
        <CardTable onCreate={onCreate} list={list} itemRoute="/categoria/"></CardTable>
      </Grid>
      <StyledDialog openProps={openDialog} onClose={onClose} onConfirm={onClose} title="Nova Categoria">
        <CategoryForm></CategoryForm></StyledDialog>
    </Grid>
  );
}
