import { Grid, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";

export function Login() {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={6} sx={{ backgroundColor: "primary.main" }}></Grid>
      <Grid
        container
        direction={"column"}
        justifyContent={"space-between"}
        xs={6}
        sx={{ padding: "56px 80px" }}
      >
        <Grid item xs={1}>
          Dinheiro em Dia
        </Grid>
        <Grid
          item
          container
          xs={10}
          direction={"column"}
          alignContent={"stretch"}
          justifyContent={"center"}
          rowSpacing={6}
        >
          <Grid item>
            <Typography variant="h3">Entrar</Typography>
          </Grid>

          <Grid item container direction={"column"} rowSpacing={2}>
            <Grid item>
              <StyledTextField label="E-mail" fullWidth />
            </Grid>
            <Grid item>
              <StyledTextField label="Nome" fullWidth />
            </Grid>

            <Grid item>Lembrar de mim</Grid>
          </Grid>
          <Grid item>
            <StyledButton variant="contained" fullWidth>
              Entrar
            </StyledButton>
          </Grid>

          <Grid item>
            <hr />
          </Grid>
          <Grid item>Cadastre-se</Grid>
        </Grid>
        <Grid item xs={1} flexShrink={0}></Grid>
      </Grid>
    </Grid>
  );
}
