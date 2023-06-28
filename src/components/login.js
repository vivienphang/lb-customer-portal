import { useState } from "react";
import { Container, TextField, Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };


  return (
    <>
      <Container maxWidth="xs" fixed={true}>
        <form onSubmit={loginHandler}>
          <TextField
            sx={{ height: 40 }}
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            sx={{ height: 40 }}
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            Login
          </Button>
        </form>
      </Container>

    </>
  );
};

export default Login;
