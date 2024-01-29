import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "../../../../../node_modules/@mui/material/index";
import {
  CardItemProps,
  CardTable,
} from "../../../../shared/components/card-table/index";
import StyledDialog from "../../../../shared/components/dialog/index";
import { CategoryForm } from "../form/index";
import { StyledTextField } from "../../../../shared/components/text-field";
import { Category, categoryOperations } from "../../../../api/category";
import { ColorPicker } from "../../../../shared/components/color-picker";
import { SpentForm } from "../../spents";
import { Spent } from "../../../../api/spent";

export function Categories() {
  const [list, setList] = useState<CardItemProps[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const onCreate = () => {
    setOpenDialog(true);
  };

  const onClose = () => {
    setCategory(null)
  };

  const onConfirmed = () => {
    getList();
    setCategory(null)
  };

  const getList = () => {
    categoryOperations.list().then((res) => {
      console.log(res);
      setList(
        res.data.map((item) => {
          return {
            consumption: 0,
            percentage: 0,
            ...item,
            onDelete: () => {
              categoryOperations.delete(item.id).then((res) => {
                getList();
                setCategory(null);
              });
            },
            onUpdate: () => {
              setOpenDialog(true);
              setCategory(item);
              setColor(item.color);
              setName(item.name);
            },
          };
        })
      );
    });
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Grid item xs={6}>
        <Typography variant="h4">Categorias</Typography>
      </Grid>

      <Grid item xs={6}>
        <CardTable
          onCreate={onCreate}
          list={list}
          itemRoute="/categoria/"
          addText="Adicionar Categoria"
        ></CardTable>
      </Grid>
      <CategoryForm
        open={openDialog}
        setOpen={setOpenDialog}
        onClose={onClose}
        onConfirmed={onConfirmed}
        category={category}
      ></CategoryForm>
    </Grid>
  );
}
