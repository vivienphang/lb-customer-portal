import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import Logout from "../components/logout";

const RestPassword = () => {
  // TODO: Handle user password change

  // TODO: Error handling when password does not match

  // TODO: Successful message when password is changed


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("data: ", data)
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 150, height: 150 }}
      />
      <Typography component="h1" variant="h5" sx={{ p: 2}}>
        User's name here
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2} justifyContent="center" direction="column">
          <Grid item xs={10}>
            <TextField
              autoComplete="currentPassword"
              name="currentPassword"
              required
              fullWidth
              id="currentPassword"
              label="Current Password:"
              type="password"
              autoFocus
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              required
              fullWidth
              id="newPassword"
              label="New Password:"
              name="newPassword"
              autoComplete="newPassword"
              type="password"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              required
              fullWidth
              id="confirmPassword"
              label="Confirm New Password:"
              name="confirmPassword"
              autoComplete="confirmPassword"
              type="password"
            />
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 1 }}>
            Reset Password
          </Button>
          <Logout />
        </Grid>
      </Box>
    </Box>
  );
};

export default RestPassword;
