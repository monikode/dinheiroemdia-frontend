import { Card, CardContent } from "@mui/material";

export function StyledCard(props: any) {
  return (
    <Card {...props}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
