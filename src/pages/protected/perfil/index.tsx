import { Button, Grid, TextField, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";
import { StyledCard } from "../../../shared/components/card";
import { useEffect, useState } from "react";
import { LoginResponseUser, userOperations } from "../../../api/user";
import { toast } from "react-toastify";

export function Perfil() {
  const [user, setUser] = useState<LoginResponseUser | null>(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const lsUser: LoginResponseUser = JSON.parse(
      localStorage.getItem("dd-user") ?? ""
    );
    if (lsUser) {
      setUser(lsUser);
      setName(lsUser.name);
      setLastName(lsUser.lastName);
      setEmail(lsUser.email);
    }
  }, []);

  const alterData = () => {
    toast.promise(
      userOperations.updateData(name, lastName, birthday).then((res) => {
        if (user) {
          setUser({
            ...user,
            name,
            lastName,
            birthday,
          });
          localStorage.removeItem("dd-user");
          localStorage.setItem(
            "dd-user",
            JSON.stringify({
              ...user,
              name,
              lastName,
              birthday,
            })
          );
        }
      }),
      {
        error: "Não foi possivel atualizar",
        pending: "Atualizando data...",
        success: "Dados atualizados com sucesso!",
      }
    );
  };

  const alterPassword = () => {
    toast.promise(
      userOperations.updatePassword(password, newPassword).then((res) => {}),
      {
        error: "Não foi possivel atualizar",
        pending: "Atualizando data...",
        success: "Senha atualizada com sucesso!",
      }
    );
  };

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
                <StyledTextField
                  label="Nome"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField
                  label="Sobrenome"
                  value={lastName}
                  error={lastName.trim().length == 0}
                  onChange={(ev) => setLastName(ev.target.value)}
                />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField
                  label="E-mail"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  type="email"
                  disabled
                />
              </Grid>

              <Grid item xs="auto">
                <StyledButton
                  variant="contained"
                  onClick={() => alterData()}
                  disabled={
                    name.trim().length == 0 || lastName.trim().length == 0
                  }
                >
                  Alterar
                </StyledButton>
              </Grid>
            </Grid>

            <Grid item xs="auto">
              <Typography variant="h6">Alterar Senha</Typography>
            </Grid>
            <Grid container item direction={"column"} rowSpacing={2}>
              <Grid item xs="auto">
                <StyledTextField
                  type="password"
                  label="Senha atual"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField
                  type="password"
                  label="Senha nova"
                  value={newPassword}
                  onChange={(ev) => setNewPassword(ev.target.value)}
                />
              </Grid>
              <Grid item xs="auto">
                <StyledTextField
                  label="Confirme sua senha"
                  type="password"
                  value={passwordRepeat}
                  onChange={(ev) => setPasswordRepeat(ev.target.value)}
                />
              </Grid>
              <Grid item xs="auto">
                <StyledButton
                  variant="contained"
                  disabled={
                    password.length == 0 ||
                    passwordRepeat !== newPassword ||
                    newPassword.trim().length < 6
                  }
                  onClick={() => alterPassword()}
                >
                  Alterar
                </StyledButton>
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
