import { Container, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    //atributos del input que recibe del evento
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evitar que se recargue la pag

    console.log("email: ", inputs.email);
    console.log("password: ", inputs.password);
  };

  return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>Login</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab
              natus animi reiciendis accusantium, a corrupti at, perferendis
              maxime tempore cumque, consequuntur et quisquam ipsum? Ipsam
              distinctio necessitatibus ullam blanditiis.
            </p>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  type="email"
                  name="email"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  Iniciar sesión
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>Login</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab
              natus animi reiciendis accusantium, a corrupti at, perferendis
              maxime tempore cumque, consequuntur et quisquam ipsum? Ipsam
              distinctio necessitatibus ullam blanditiis.
            </p>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Login;

