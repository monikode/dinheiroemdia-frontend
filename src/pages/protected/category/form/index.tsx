import { useEffect, useState } from "react";
import { Box } from "../../../../../node_modules/@mui/material/index";
import { Category, categoryOperations } from "../../../../api/category";
import { ColorPicker } from "../../../../shared/components/color-picker";
import StyledDialog from "../../../../shared/components/dialog";
import { StyledTextField } from "../../../../shared/components/text-field/index";
import { IconPicker } from "../../../../shared/components/icon-picker";
import { Grid } from "@mui/material";

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
  const [icon, setIcon] = useState("");

  const onClose = () => {
    props.setOpen(false);
    props.onClose();
    setName("");
    setColor("");
    setIcon("");
  };

  const onConfirm = () => {
    if (props.category) {
      categoryOperations
        .update(props.category.id, name, color, icon)
        .then((res) => {
          // getList();
          // setCatSelected(-1);
          props.setOpen(false);
          setName("");
          setColor("");
          setIcon("");
          props.onConfirmed();
        });
    } else {
      categoryOperations.create(name, color, icon).then((res) => {
        // getList();
        props.setOpen(false);
        setName("");
        setColor("");
        setIcon("");
        props.onConfirmed();
      });
    }
  };

  useEffect(() => {
    if (props.category) {
      setName(props.category.name);
      setColor(props.category.color);
      setIcon(props.category.icon);
    } else {
      setName("");
      setColor("");
      setIcon("");
    }
  }, [props.category]);

  return (
    <StyledDialog
      openProps={props.open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={props.category ? "Editar Categoria" : "Nova Categoria"}
      confirmDisabled={
        name.trim().length == 0 ||
        color.trim().length == 0 ||
        icon.trim().length == 0
      }
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <StyledTextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </Grid>
        <Grid item container gap={2}>
          <Grid item>
            {" "}
            <ColorPicker
              label="Cor"
              value={color}
              onChange={(ev) => setColor(ev.target.value)}
            ></ColorPicker>
          </Grid>
          <Grid item>
            {" "}
            <IconPicker
              label="Ícone"
              value={icon}
              onChange={(ev) => setIcon(ev.target.value)}
            ></IconPicker>
          </Grid>
        </Grid>
      </Grid>
    </StyledDialog>
  );
}
