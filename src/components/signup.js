import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Function to check password validation
  const validatePassword = () => {
    // Check for 12 characters and any one symbols of !@#$
    const passwordRegex = /^(?=.*[!@#$]).{12,}$/;
    if (password !== "" && password.match(passwordRegex)) {
      setIsPasswordValid(true);
      return true;
    } else {
      return false;
    }
  };

  // Function to handle submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log(validatePassword());
    if (validatePassword()) {
      // Create a new user with email and password
      try {
        console.log("inside try catch block");
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("this is data:", data);
        navigate("/dashboard");
      } catch (err) {
        console.log("error msg:", err.message);
      }
    } else
      setErrorMessage(
        "Password must be at least 12 characters and include at least 1 special characters of !@#$"
      );
    // Reset text fields
    setEmail("");
    setPassword("");
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmitForm}>
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
        {validatePassword !== true && (
          <Typography
            marginTop={2}
            sx={{ textAlign: "center", color: "red", fontSize: "12px" }}
          >
            {errorMessage}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          size="large"
          sx={{ marginTop: "1rem", marginBottom: "2rem" }}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;


