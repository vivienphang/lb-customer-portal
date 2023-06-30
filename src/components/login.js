import { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uidToken, setUidToken] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      console.log("inside login handler try block")
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("userCredential", userCredential)
      const user = userCredential.user;
      console.log("user:", user)
      
      if (user.email === email) {
        const userId = user.uid
        setUidToken(userId)
        console.log("User ID:", userId);
        navigate("/dashboard")
      } 
    } catch (error) {
      console.log("Login Error:", error.message);
      console.log("console includes:", error.message.includes("user"))
      if (error.message.includes("user")) {
        setErrorMessage("Incorrect email address. Please try again.")
      } else {
        setErrorMessage("Incorrect password. Please try again.")
      }
      setEmail("")
      setPassword("")
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
