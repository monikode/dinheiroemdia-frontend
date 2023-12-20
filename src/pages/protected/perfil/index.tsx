import { Button, Grid, TextField, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";
import { StyledCard } from "../../../shared/components/card";

export function Perfil() {
  return (
    <Grid container direction={"column"} flexWrap={"nowrap"} rowSpacing={5}>
      <Grid container item>
        <Grid item xs={6}>
          <Typography variant="h4">Perfil</Typography>
        </Grid>

        {/* <Grid item xs={6} justifyContent={"flex-end"}>
        <StyledButton sx={{marginLeft: "auto"}} variant="contained">Exportar relatório</StyledButton>
      </Grid> */}
      </Grid>
      <Grid item xs="auto">
        <StyledCard>
          <Grid container item direction={"column"} xs="auto" rowSpacing={3}>
            <Grid item xs="auto">
              <Typography variant="h6">Dados Gerais</Typography>
            </Grid>
            <Grid container item direction={"column"} rowSpacing={2}>
              <Grid item xs="auto">
                <StyledTextField label="Nome" />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField label="E-mail" />
              </Grid>

              <Grid item xs="auto">
                <StyledButton variant="contained">Alterar</StyledButton>
              </Grid>
            </Grid>

            <Grid item xs="auto">
              <Typography variant="h6">Alterar Senha</Typography>
            </Grid>
            <Grid container item direction={"column"} rowSpacing={2}>
              <Grid item xs="auto">
                <StyledTextField label="Senha atual" />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField label="Senha nova" />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField label="Confirme sua senha" />
              </Grid>
              <Grid item xs="auto">
                <StyledButton variant="contained">Alterar</StyledButton>
              </Grid>
            </Grid>

            <Grid item xs="auto">
              <Typography variant="h6">Conta</Typography>
            </Grid>

            <Grid item xs="auto">
              <StyledButton variant="contained" color="error">
                Deletar conta
              </StyledButton>
            </Grid>

            {/* <Grid item xs={6} justifyContent={"flex-end"}>
        <StyledButton sx={{marginLeft: "auto"}} variant="contained">Exportar relatório</StyledButton>
      </Grid> */}
          </Grid>
        </StyledCard>
      </Grid>
    </Grid>
  );
}
