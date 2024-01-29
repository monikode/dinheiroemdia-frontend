import { useEffect, useState } from "react";
import { Box } from "../../../../../node_modules/@mui/material/index";
import { Category, categoryOperations } from "../../../../api/category";
import { ColorPicker } from "../../../../shared/components/color-picker";
import StyledDialog from "../../../../shared/components/dialog";
import { StyledTextField } from "../../../../shared/components/text-field/index";

export interface CategoryFormProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  category: Category | null;
  onClose: () => {};
  onConfirmed: () => {};
}

export function CategoryForm(props: CategoryFormProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const onClose = () => {
    setName("");
    setColor("");
    props.setOpen(false);
    props.onClose();
  };

  const onConfirm = () => {
    if (props.category) {
      categoryOperations
        .update(props.category.id, name, color, "fast-food")
        .then((res) => {
          // getList();
          // setCatSelected(-1);
          props.setOpen(false);
          setName("");
          setColor("");
          props.onConfirmed();
        });
    } else {
      categoryOperations.create(name, color, "fast-food").then((res) => {
        // getList();
        props.setOpen(false);
        setName("");
        setColor("");
        props.onConfirmed();
      });
    }
  };

  useEffect(() => {
    if (props.category) {
      setName(props.category.name);
      setColor(props.category.color);
    }else{
        setName("");
        setColor("");
    }
  }, [props.category]);

  return (
    <StyledDialog
      openProps={props.open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={props.category ? "Editar Categoria" : "Nova Categoria"}
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
