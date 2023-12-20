import {
  FormControl,
  InputBase,
  InputLabel,
  TextField,
  alpha,
  styled,
} from "@mui/material";
import { InputStyled, LabelStyled } from "../inputstyle";

export function StyledTextField(props: any) {
  return (
    <FormControl fullWidth variant="standard">
      {props.label ? (
        <LabelStyled shrink htmlFor="bootstrap-input">
          {props.label}
        </LabelStyled>
      ) : null}
      <InputStyled {...props}>{props.children}</InputStyled>
    </FormControl>
  );
}
