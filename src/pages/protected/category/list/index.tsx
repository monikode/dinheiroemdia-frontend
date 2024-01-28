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
import { categoryOperations } from "../../../../api/category";

export function Categories() {
  const [list, setList] = useState<CardItemProps[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [catSelected, setCatSelected] = useState(-1);
  const onCreate = () => {
    setOpenDialog(true);
  };

  const onClose = () => {
    setOpenDialog(false);
  };

  const onConfirm = () => {
    if (catSelected >= 0) {
      categoryOperations.update(catSelected, name, "#8246AE", "fast-food").then((res) => {
        getList();
        setCatSelected(-1);
        setOpenDialog(false);
        setName("")
      });
    } else {
      categoryOperations.create(name, "#8246AE", "fast-food").then((res) => {
        getList();
        setOpenDialog(false);
        setName("")

      });
    }
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
              });
            },
            onUpdate: () => {
              setOpenDialog(true);
              setCatSelected(item.id);
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
        ></CardTable>
      </Grid>
      <StyledDialog
        openProps={openDialog}
        onClose={onClose}
        onConfirm={onConfirm}
        title={catSelected > 0? "Editar Categoria": "Nova Categoria"}
      >
        <StyledTextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </StyledDialog>
    </Grid>
  );
}
