import { CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CardItemProps, CardTable } from "../../../../shared/components/card-table/index";
import StyledDialog from "../../../../shared/components/dialog/index";
import { CategoryForm } from "../../category/form/index";
import { AccountForm } from "../form/index";
import { categoryOperations } from "../../../../api/category";
import { accountOperations } from "../../../../api/account";
import { StyledTextField } from "../../../../shared/components/text-field";
import { ColorPicker } from "../../../../shared/components/color-picker";

export function Accounts() {
  const [list, setList] = useState<CardItemProps[]>([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [accSelected, setAccSelected] = useState(-1);
  const [openDialog, setOpenDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
 

  const onCreate = () => {
    setOpenDialog(true)
  }

  const onClose = () => {
    setName("")
    setColor("");
    setOpenDialog(false);
  };

  const onConfirm = () => {
    if (accSelected >= 0) {
      accountOperations.update(accSelected, name, color, "fast-food").then((res) => {
        getList();
        setAccSelected(-1);
        setOpenDialog(false);
        setName("")
      });
    } else {
      accountOperations.create(name, color, "fast-food", 0, "0").then((res) => {
        getList();
        setOpenDialog(false);
        setName("")

      });
    }
  };

  const getList = () => {
    setIsLoading(true)
    accountOperations.list().then((res) => {
      setIsLoading(false)

      setList(
        res.data.map((item) => {
          return {
            consumption: 0,
            percentage: 0,
            ...item,
            onDelete: () => {
              accountOperations.delete(item.id).then((res) => {
                setAccSelected(-1);
                getList();
              });
            },
            onUpdate: () => {
              setOpenDialog(true);
              setAccSelected(item.id);
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
        <Typography variant="h4">Contas</Typography>
      </Grid>

      <Grid item xs={6}>


        {isLoading ?
          <CircularProgress sx={{ margin: '0 auto', padding: "10px", display: "block" }} /> : 
          <CardTable
              onCreate={onCreate}
              list={list}
              itemRoute="/conta/"
            addText="Adicionar Conta"
    
            ></CardTable>
        }
      </Grid>

      <StyledDialog
        openProps={openDialog}
        onClose={onClose}
        onConfirm={onConfirm}
        title={accSelected > 0 ? "Editar Conta" : "Nova Conta"}
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
