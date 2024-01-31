import ArticleIcon from "@mui/icons-material/Article";
import HandymanIcon from "@mui/icons-material/Handyman";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import MovieIcon from "@mui/icons-material/Movie";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { FormControl, Select, MenuItem } from "@mui/material";
import { InputStyled, LabelStyled } from "../inputstyle";

export const iconsList = [
  { name: "handyman", icon: <HandymanIcon /> },
  { name: "beach", icon: <BeachAccessIcon /> },
  { name: "airplane", icon: <AirplanemodeActiveIcon /> },
  { name: "localmall", icon: <LocalMallIcon /> },
  { name: "lightbulb", icon: <LightbulbIcon /> },
  { name: "hospital", icon: <LocalHospitalIcon /> },
  { name: "school", icon: <SchoolIcon /> },
  { name: "movie", icon: <MovieIcon /> },
  { name: "checkroom", icon: <CheckroomIcon /> },
  { name: "article", icon: <ArticleIcon /> },
  { name: "fast-food", icon: <FastfoodIcon /> },
  { name: "current", icon: <AccountBalanceWalletIcon /> },
  { name: "savings", icon: <SavingsIcon /> },
  { name: "credit", icon: <CreditCardIcon /> },
];
export function IconPicker(props: any) {
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
        {iconsList.map((item) => (
          <MenuItem value={item.name}>{item.icon}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
