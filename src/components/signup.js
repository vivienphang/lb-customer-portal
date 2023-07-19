import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Signup = ({ setUserDocId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Function to check password validation
  const validatePassword = (paswword) => {
    // Check for 12 characters and any one symbols of !@#$
    const passwordRegex = /^(?=.*[!@#$]).{12,}$/;
    return password !== "" && passwordRegex.test(password);
  };


  const createUserData = async (userId) => {
    try {
      console.log("inside createUserdata...")
      const docRef = await addDoc(collection(db, "users"), {
        email,
        password,
        displayName
      });
      console.log("docRef: ", docRef);
      console.log("docRef ID: ", docRef.id);
      const docRefId = docRef.id;
      setUserDocId(docRefId);
    } catch (e) {
      console.error(e);
    }
  };

  // Function to handle submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
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
        const userId = data.user.uid;
        console.log("user UID:", userId);
        // Update user's displayName
        await updateProfile(auth.currentUser, {
          displayName: displayName}).then(() => {
            console.log("display name updated!")
          })
        await createUserData();

        navigate("/");
        alert("Sign up successful. Please login.");
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
    setDisplayName("");
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmitForm}>
      <TextField
          sx={{ height: 40 }}
          label="Full Name"
          type="name"
          fullWidth
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          margin="normal"
        />
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
