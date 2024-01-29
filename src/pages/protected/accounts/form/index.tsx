import { useEffect, useState } from "react";
import { Box } from "../../../../../node_modules/@mui/material/index";
import { Category, categoryOperations } from "../../../../api/category";
import { ColorPicker } from "../../../../shared/components/color-picker";
import StyledDialog from "../../../../shared/components/dialog";
import { StyledTextField } from "../../../../shared/components/text-field/index";
import { Account, accountOperations } from "../../../../api/account";

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

  const onClose = () => {
    setName("");
    setColor("");
    props.setOpen(false);
    props.onClose();
  };

  const onConfirm = () => {
    if (props.account) {
        accountOperations
        .update(props.account.id, name, color, "fast-food", 0, "0")
        .then((res) => {
          // getList();
          // setCatSelected(-1);
          props.setOpen(false);
          setName("");
          setColor("");
          props.onConfirmed();
        });
    } else {
      accountOperations.create(name, color, "fast-food", 0, "0").then((res) => {
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
    }else{
        setName("");
        setColor("");
    }
  }, [props.account]);

  return (
    <StyledDialog
      openProps={props.open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={props.account? "Editar Conta": "Nova Conta"}

      confirmDisabled={name.trim().length == 0 || color.trim().length == 0}
    >
      <StyledTextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <ColorPicker
        label="Cor"
        value={color}
        onChange={(ev) => setColor(ev.target.value)}
      ></ColorPicker>
    </StyledDialog>
  );
}
