import { Grid, LinearProgress, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";
import { useState } from "react";
import { LastPage } from "../../../../node_modules/@mui/icons-material/index";
import { userOperations } from "../../../api/user";
import { Link as StyledLink } from "../../../../node_modules/@mui/material/index";
import {
  Link,
  useNavigate,
} from "../../../../node_modules/react-router-dom/dist/index";
import IconGreen from "../../../shared/assets/svg/icon_green.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigate = useNavigate();

  function signUp() {
    userOperations
      .create({ name, lastName, email, birthday }, password)
      .then((res) => {
        localStorage.setItem("dd-authenticated", "true");

        navigate("/home");
      })
      .catch((e) => {
        alert("nao criou");
      });
  }
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid
        container
        item
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
            <img src={IconGreen} alt="Dinheiro em dia" />
          </Grid>
          <Grid item>
            <Typography variant="h3">Cadastre-se</Typography>
          </Grid>
          <LinearProgress variant="determinate" value={100 / 3} />

          <Grid item container direction={"column"} rowSpacing={2}>
            <Grid container item columnSpacing={2}>
              <Grid item xs={6}>
                <StyledTextField
                  label="Nome"
                  fullWidth
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  label="Sobrenome"
                  fullWidth
                  value={lastName}
                  onChange={(ev) => setLastName(ev.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item>
              <StyledTextField
                label="E-mail"
                fullWidth
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
              />
            </Grid>
          </Grid>

          <Grid container item columnSpacing={2}>
            <Grid item xs={12}>
              <StyledTextField
                label="Data Nasc."
                fullWidth
                value={birthday}
                onChange={(ev) => setName(ev.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container item direction={"column"} columnSpacing={2}>
            <Grid item xs={6}>
              <StyledTextField
                label="Senha"
                fullWidth
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <StyledTextField
                label="Repita senha"
                fullWidth
                type="password"
                value={passwordRepeat}
                onChange={(ev) => setPasswordRepeat(ev.target.value)}
                // helperText="Senhas não coincidem"
                error={password != passwordRepeat}
              />
            </Grid>
          </Grid>

          <Grid item>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={signUp}
              disabled={
                password != passwordRepeat ||
                name.trim().length == 0 ||
                name.trim().length == 0 ||
                lastName.trim().length == 0 ||
                email.trim().length == 0 ||
                password.trim().length < 6
              }
            >
              Cadastrar
            </StyledButton>
          </Grid>

          <Grid item>
            <hr />
          </Grid>
          <Grid item>
            Já possui uma conta? <Link to="/login">Clique para entrar. </Link>
          </Grid>
        </Grid>
        <Grid item xs={1} flexShrink={0}></Grid>
      </Grid>

      <Grid item xs={5} sx={{ backgroundColor: "primary.main" }}></Grid>
    </Grid>
  );
}
