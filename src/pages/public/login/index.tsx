import { Grid, Typography } from "@mui/material";
import { StyledTextField } from "../../../shared/components/text-field";
import { StyledButton } from "../../../shared/components/button";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";
import { userOperations } from "../../../api/user";
import { useState } from "react";


export function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login() {
    userOperations.login(email, password).then(res => {
      alert("criou")
    }).catch(e => {
      alert("nao criou")

    })
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
        <Grid item xs={1}>
          {/* Dinheiro em Dia */}
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
              <StyledTextField label="E-mail" fullWidth value={email} onChange={ev => setEmail(ev.target.value)} type="email" />
            </Grid>
            <Grid item>
              <StyledTextField label="Senha" fullWidth value={password} onChange={ev => setPassword(ev.target.value)} type="password" />
            </Grid>

            <Grid item>Lembrar de mim</Grid>
          </Grid>
          <Grid item>
            <StyledButton variant="contained" fullWidth onClick={()=>login()}>
              Entrar
            </StyledButton>
          </Grid>

          <Grid item>
            <hr />
          </Grid>
          <Grid item>
            <Link to="/cadastro">Cadastre-se</Link></Grid>
        </Grid>
        <Grid item xs={1} flexShrink={0}></Grid>
      </Grid>
    </Grid>
  );
}
