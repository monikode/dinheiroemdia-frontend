import { Grid, LinearProgress, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";

export function SignUp() {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid
        container
        direction={"column"}
        justifyContent={"space-between"}
        xs={7}
        sx={{ padding: "56px 80px" }}
      >
        {/* <Grid item xs={1}>
          Dinheiro em Dia
        </Grid> */}
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
            <Typography variant="h3">Cadastre-se</Typography>
          </Grid>
          <LinearProgress variant="determinate" value={100 / 3} />

          <Grid item container direction={"column"} rowSpacing={2}>
            <Grid container item columnSpacing={2}>
              <Grid item xs={6}>
                <StyledTextField label="Nome" fullWidth />
              </Grid>

              <Grid item xs={6}>
                <StyledTextField label="Sobrenome" fullWidth />
              </Grid>
            </Grid>
            <Grid item>
              <StyledTextField label="E-mail" fullWidth />
            </Grid>
          </Grid>

          <Grid container item columnSpacing={2}>
            <Grid item xs={12}>
              <StyledTextField label="Data Nasc." fullWidth />
            </Grid>
          </Grid>

          <Grid container item direction={"column"} columnSpacing={2}>
            <Grid item xs={6}>
              <StyledTextField label="Senha" fullWidth />
            </Grid>

            <Grid item xs={6}>
              <StyledTextField label="Repita senha" fullWidth />
            </Grid>
          </Grid>

          <Grid item>
            <StyledButton variant="contained" fullWidth>
              Próximo
            </StyledButton>
          </Grid>

          <Grid item>
            <hr />
          </Grid>
          <Grid item>Cadastre-se</Grid>
        </Grid>
        <Grid item xs={1} flexShrink={0}></Grid>
      </Grid>

      <Grid item xs={5} sx={{ backgroundColor: "primary.main" }}></Grid>
    </Grid>
  );
}
