import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  alpha,
  styled,
} from "@mui/material";
import { InputStyled, LabelStyled } from "../inputstyle";
import { useEffect, useState } from "react";

export function ColorPicker(props: any) {
  // const [color, setColor] = useState("")
  const colors = [
    "#000000",
    "#00511B",
    "#E31B79",
    "#592D83",
    "#0A2B56",
    "#FC9403",
  ];

  return (
    <FormControl variant="standard">
      {props.label ? (
        <LabelStyled shrink htmlFor="bootstrap-input">
          {props.label}
        </LabelStyled>
      ) : null}
      <Select
        id="demo-customized-select-native"
        input={<InputStyled />}
        MenuProps={{
          PaperProps: {
            sx: {
              ul: {
                display: "flex",
                gap: "1rem",
              },
             
            },
          },
        }}
       
        {...props}
      >
        {colors.map((item) => (
          <MenuItem value={item}>
            <Box sx={{ backgroundColor: item, height: "32px", width: "32px", borderRadius: 2}}></Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
