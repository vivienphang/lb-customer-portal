import React, { useState } from "react";
import {
  Button,
  Card,
  CardMedia,
  CardActions,
  Stack,
  Typography,
} from "@mui/material";
import Login from "../components/login";
import Signup from "../components/signup";
import backgroundImg from "./assets/bg-image.png";
// import { db } from "../config/firebase";
// import {getDocs, collection} from "firebase/firestore"

const Home = ({ userToken, setUserToken, setUserDocId }) => {
  // Create states to handle login and signup
  const [isLoginClicked, setIsLoginClicked] = useState(true);

  return (
    // <Grid direction="column" alignItems="center" justify="center">
    <div
      className="homepage"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          maxHeight: 745,
          border: "0.5px solid black",
          borderRadius: 5,
          backgroundColor: "rgba(255,255,255, 0.5)",
        }}
        margin="normal"
      >
        <CardMedia
          component="img"
          sx={{ height: 145, objectFit: "contain", marginTop: "3rem" }}
          image="../images/Logo.png"
          title="logo"
        ></CardMedia>
        <Stack direction="column" alignItems="center" gap={1}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h6"
            color="text.secondary"
          >
            LionsBot Customer Portal
          </Typography>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                setIsLoginClicked(true);
              }}
            >
              Login
            </Button>
            <Button
              size="small"
              onClick={() => {
                setIsLoginClicked(false);
              }}
            >
              Sign up
            </Button>
          </CardActions>

          {isLoginClicked && (
            <Login userToken={userToken} setUserToken={setUserToken} />
          )}
          {!isLoginClicked && (
            <Signup userToken={userToken} setUserDocId={setUserDocId} />
          )}
        </Stack>
      </Card>
    </div>
  );
};

export default Home;
