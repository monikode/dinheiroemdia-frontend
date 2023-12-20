import {
  FormControl,
  InputBase,
  InputLabel,
  Select,
  alpha,
  styled,
} from "@mui/material";
import { InputStyled, LabelStyled } from "../inputstyle";


export function StyledSelect(props: any) {
  return (
    <FormControl fullWidth variant="standard">
      {props.label ? (
        <LabelStyled shrink htmlFor="bootstrap-input">
          {props.label}
        </LabelStyled>
      ) : null}
      <Select
        id="demo-customized-select-native"
        input={<InputStyled  />}
        {...props}
      >
        {props.children}
      </Select>
    </FormControl>
  );
}
