import { useState } from "react";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";

const Login = ({ userToken, setUserToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  let userId;
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("inside login handler try block");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = { ...userCredential.user };
      console.log("new user:", newUser);
      localStorage.setItem("username", newUser.displayName)
      setUserToken(newUser); // can use it in app.js

      if (newUser.email === email) {
        userId = newUser.uid;
        console.log("User ID:", userId);
        localStorage.setItem("authUser", userId);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login Error:", error.message);
      setErrorMessage("Incorrect email address/password. Please try again.");
    }
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
            sx={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            Login
          </Button>
          {errorMessage && (
            <Typography
              marginBottom={2}
              sx={{ textAlign: "center", color: "red", fontSize: "13px" }}
            >
              {errorMessage}
            </Typography>
          )}
        </form>
      </Container>
    </>
  );
};

export default Login;
