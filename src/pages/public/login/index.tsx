import { Grid, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";
import {
  Link,
  useNavigate,
} from "../../../../node_modules/react-router-dom/dist/index";
import { userOperations } from "../../../api/user";
import { useState } from "react";
import IconGreen from "../../../shared/assets/svg/icon_green.svg";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    userOperations
      .login(email, password)
      .then((res) => {
        localStorage.setItem("dd-authenticated", "true");
        localStorage.setItem("dd-token", res.data.result.access_token);
        navigate("/home");
      })
      .catch((e) => {
        alert("nao criou");
      });
  }

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
        <Grid
          item
          container
          xs={10}
          direction={"column"}
          alignContent={"stretch"}
          justifyContent={"center"}
          rowSpacing={6}
        >
          <Grid item xs={1}>
            <img src={IconGreen} alt="Dinheiro em dia" />
          </Grid>
          <Grid item>
            <Typography variant="h3">Entrar</Typography>
          </Grid>

          <Grid item container direction={"column"} rowSpacing={2}>
            <Grid item>
              <StyledTextField
                label="E-mail"
                fullWidth
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
              />
            </Grid>
            <Grid item>
              <StyledTextField
                label="Senha"
                fullWidth
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
              />
            </Grid>

            <Grid item>Lembrar de mim</Grid>
          </Grid>
          <Grid item>
            <StyledButton variant="contained" fullWidth onClick={() => login()}>
              Entrar
            </StyledButton>
          </Grid>

          <Grid item>
            <hr />
          </Grid>
          <Grid item>
            <Link to="/cadastro">Cadastre-se</Link>
          </Grid>
        </Grid>
        <Grid item xs={1} flexShrink={0}></Grid>
      </Grid>
    </Grid>
  );
}
