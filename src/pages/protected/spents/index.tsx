import { useEffect, useState } from "react";
import { Box } from "../../../../../node_modules/@mui/material/index";
import StyledDialog from "../../../shared/components/dialog";
import { Spent, spentOperations } from "../../../api/spent";
import { Category, categoryOperations } from "../../../api/category";
import { Account, accountOperations } from "../../../api/account";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledSelect } from "../../../shared/components/select";
import {} from "@mui/base";
import { InputAdornment, MenuItem } from "@mui/material";

export interface SpentFormProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  spent?: Spent;
  categoryId?: number;
  accountId?: number;
  onClose: () => {};
  onConfirmed: () => {};
}
export function SpentForm(props: SpentFormProps) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("0");
  const [account, setAccount] = useState(parseInt(props.accountId ?? -1));
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [category, setCategory] = useState(parseInt(props.categoryId ?? "-1"));
  const [categories, setCategories] = useState<Category[]>([]);

  const onClose = () => {
    setName("");
    setValue(0);
    setCategory(-1);
    setAccount(-1);
    props.setOpen(false);
  };

  const onConfirm = () => {
    spentOperations.create(name, parseFloat(value), account, category).then((res) => {
      props.setOpen(false);
      setName("");
      setValue(0);
      setCategory(-1);
      setAccount(-1);
      props.onConfirmed();
    });
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

  function formatMoney(valor:string) {
    let amount = valor
      .replaceAll(".", "")
      .replaceAll(",", "")
      .replace(/\D/g, "");

    if (amount.length < 4) {
      amount = "0" * (4 - amount.length) + amount;
    } else {
      amount = amount.replace(/^0+/, "");
    }

    let decimals = amount.slice(amount.length-2)
    amount = amount.slice(0, amount.length-2)

  
    // Substitui o ponto decimal por vírgula
    amount = amount + "." + decimals

    return amount;
  }

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
      <StyledTextField
        id="outlined-basic"
        label="Valor"
        variant="outlined"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        value={value}
        onChange={(ev) => setValue(formatMoney(ev.target.value))}
      />
    </StyledDialog>
  );
}
