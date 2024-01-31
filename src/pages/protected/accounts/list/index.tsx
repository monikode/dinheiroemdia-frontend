import { CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CardItemProps,
  CardTable,
} from "../../../../shared/components/card-table/index";
import StyledDialog from "../../../../shared/components/dialog/index";
import { CategoryForm } from "../../category/form/index";
import { AccountForm } from "../form/index";
import { categoryOperations } from "../../../../api/category";
import { Account, accountOperations } from "../../../../api/account";
import { StyledTextField } from "../../../../shared/components/text-field";
import { ColorPicker } from "../../../../shared/components/color-picker";

export function Accounts() {
  const [list, setList] = useState<CardItemProps[]>([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [account, setAccount] = useState<Account | null>(null);
  const [openDialog, setOpenDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
 

  const onCreate = () => {
    setOpenDialog(true);
  };

  const onClose = () => {
   setAccount(null)
  };
  const onConfirmed = () => {
    getList();
    setAccount(null)
  };


  const getList = () => {

    setIsLoading(true)
    accountOperations.list().then((res) => {
      setIsLoading(false)

      setList(
        res.data.map((item) => {
          return {
           consumption: item.consumption??0,
           percentage: item.percentage??0,

            ...item,
            icon: item.type == "0"? "current": item.type=="1"?"savings": "creditcard",
            onDelete: () => {
              accountOperations.delete(item.id).then((res) => {
                setAccount(null);
                getList();
              });
            },
            onUpdate: () => {
              setOpenDialog(true);
              setAccount(item);
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

      <AccountForm
        open={openDialog}
        setOpen={setOpenDialog}
        onClose={onClose}
        onConfirmed={onConfirmed}
        account={account}
      />
    </Grid>
  );
}
