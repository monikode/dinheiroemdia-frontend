import { Card, CardContent, InputLabel, styled } from "@mui/material";

export const CardStyled = styled(Card)(({ theme }) => ({
  borderRadius: 10
}));

export function StyledCard(props: any) {
  return (
    <CardStyled {...props}>
      <CardContent>{props.children}</CardContent>
    </CardStyled>
  );
}
