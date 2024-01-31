import { useEffect, useState } from "react";
import { Box } from "../../../../../node_modules/@mui/material/index";
import { Category, categoryOperations } from "../../../../api/category";
import { ColorPicker } from "../../../../shared/components/color-picker";
import StyledDialog from "../../../../shared/components/dialog";
import { StyledTextField } from "../../../../shared/components/text-field/index";
import { Account, accountOperations } from "../../../../api/account";
import { IconPicker } from "../../../../shared/components/icon-picker";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { Grid, MenuItem, InputAdornment } from "@mui/material";
import { StyledSelect } from "../../../../shared/components/select";

export interface AccountFormProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  account: Account | null;
  onClose: () => {};
  onConfirmed: () => {};
}

export function AccountForm(props: AccountFormProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);

  const onClose = () => {
    setName("");
    setColor("");
    setType("");
    setValue(0);
    props.setOpen(false);
    props.onClose();
  };

  const onConfirm = () => {
    if (props.account) {
      accountOperations
        .update(props.account.id, name, color, "", value, type)
        .then((res) => {
          // getList();
          // setCatSelected(-1);
          props.setOpen(false);
          setName("");
          setColor("");
          setType("");
          props.onConfirmed();
        });
    } else {
      accountOperations.create(name, color, "", value, type).then((res) => {
        // getList();
        props.setOpen(false);
        setName("");
        setColor("");
        props.onConfirmed();
      });
    }
  };

  useEffect(() => {
    if (props.account) {
      setName(props.account.name);
      setColor(props.account.color);
      setType(props.account.type);
    } else {
      setName("");
      setColor("");
      setType("");
    }
  }, [props.account]);

  return (
    <StyledDialog
      openProps={props.open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={props.account ? "Editar Conta" : "Nova Conta"}
      confirmDisabled={name.trim().length == 0 || color.trim().length == 0}
    >
      <Grid container gap={2}>
        <Grid item xs={10}>
          <StyledTextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <ColorPicker
            label="Cor"
            value={color}
            onChange={(ev) => setColor(ev.target.value)}
          ></ColorPicker>
        </Grid>
      </Grid>

      <Grid container gap={2}>
        <Grid item xs={6}>
          <StyledTextField
            id="outlined-basic"
            label="Valor"
            variant="outlined"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={value}
            mask={[
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
            ]}
            onChange={(ev) => setValue(ev.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <StyledSelect
            label="Tipo"
            value={type}
            onChange={(ev) => setType(ev.target.value)}
          >
            <MenuItem value="0">Conta Corrente</MenuItem>
            <MenuItem value="1">Conta Poupança</MenuItem>
            <MenuItem value="2">Cartão de Crédito</MenuItem>
          </StyledSelect>
        </Grid>
      </Grid>
    </StyledDialog>
  );
}
