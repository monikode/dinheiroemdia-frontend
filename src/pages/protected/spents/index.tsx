import { useEffect, useState } from "react";
import { Box } from "../../../../../node_modules/@mui/material/index";
import StyledDialog from "../../../shared/components/dialog";
import { Spent, spentOperations } from "../../../api/spent";
import { Category, categoryOperations } from "../../../api/category";
import { Account, accountOperations } from "../../../api/account";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledSelect } from "../../../shared/components/select";
import {} from "@mui/base";
import { MenuItem } from "@mui/material";

export interface SpentFormProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  spent?: Spent;
  categoryId?: number;
  accountId?: number;
  onClose: () => {};
}
export function SpentForm(props: SpentFormProps) {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [account, setAccount] = useState(props.accountId ?? -1);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [category, setCategory] = useState(props.categoryId ?? -1);
  const [categories, setCategories] = useState<Category[]>([]);


  const onClose = () => {
    setName("");
    setValue(0);
    props.setOpen(false);
  };

  const onConfirm = () => {
    spentOperations.create(name, value, account, category).then((res) => {});
  };

  useEffect(() => {
    if (props.spent) {
      setName(props.spent.description);
      setValue(props.spent.value);
      setAccount(props.spent.accountId);
      setCategory(props.spent.categoryId);
    }

    categoryOperations.list().then((res) => {
      setCategories(res.data);
    });

    accountOperations.list().then((res) => {
      setAccounts(res.data);
    });
  }, []);

  return (
    <StyledDialog
      openProps={props.open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={props.spent ? "Editar Gasto" : "Novo Gasto"}
      confirmDisabled={
        name.trim().length == 0 || value < 0 || account < 0 || category < 0
      }
    >
      <StyledTextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <StyledSelect
        label="Pago com a conta"
        value={account}
        onChange={(ev) => setAccount(ev.target.value)}
      >
        {accounts.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </StyledSelect>

      <StyledSelect
        label="Categoria"
        value={category}
        onChange={(ev) => setCategory(ev.target.value)}
      >
        {categories.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </StyledSelect>
    </StyledDialog>
  );
}
