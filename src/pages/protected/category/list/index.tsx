import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
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
import { ColorPicker } from "../../../../shared/components/color-picker";

export function Categories() {
  const [list, setList] = useState<CardItemProps[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [catSelected, setCatSelected] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const onCreate = () => {
    setOpenDialog(true);
  };

  const onClose = () => {
    setName("")
    setColor("");
    setOpenDialog(false);
  };

  const onConfirm = () => {
    if (catSelected >= 0) {
      categoryOperations.update(catSelected, name, color, "fast-food").then((res) => {
        getList();
        setCatSelected(-1);
        setOpenDialog(false);
        setName("")
      });
    } else {
      categoryOperations.create(name, color, "fast-food").then((res) => {
        getList();
        setOpenDialog(false);
        setName("")

      });
    }
  };

  const getList = () => {
    setIsLoading(true)
    categoryOperations.list().then((res) => {
      setIsLoading(false)

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
              setColor(item.color);
              setName(item.name)

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
        <Typography variant="h4">  Categorias</Typography>
      </Grid>

      <Grid item xs={6} >
        {isLoading ?
          <CircularProgress sx={{margin: '0 auto', padding: "10px", display: "block"}} /> : <CardTable
            onCreate={onCreate}
            list={list}
            itemRoute="/categoria/"
            addText="Adicionar Categoria"

          ></CardTable>
        }

      </Grid>
      <StyledDialog
        openProps={openDialog}
        onClose={onClose}
        onConfirm={onConfirm}
        title={catSelected > 0 ? "Editar Categoria" : "Nova Categoria"}
        confirmDisabled={name.trim().length == 0 || color.trim().length == 0}
      >
        <StyledTextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <ColorPicker label="Cor" value={color} onChange={ev => setColor(ev.target.value)}></ColorPicker>
      </StyledDialog>
    </Grid>
  );
}
