import { Button, styled } from "@mui/material";

export const ButtonStyled = styled(Button)(({ theme }) => ({
  borderRadius: 10,
}));
export function StyledButton(props: any) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
}
