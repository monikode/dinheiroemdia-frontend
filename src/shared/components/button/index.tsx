import { Button } from "@mui/material";

export function StyledButton(props: any) {
  return <Button {...props}>{props.children}</Button>;
}
