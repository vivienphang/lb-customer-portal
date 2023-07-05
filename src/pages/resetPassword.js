import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";

const RestPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 150, height: 150 }}
      />
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={5.25}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={5.25}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={10.5}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
            />
          </Grid>
          <Grid item xs={3.5}>
            <TextField
              required
              fullWidth
              name="cleaning-hours"
              id="cleaning-hours"
              label="Cleaning Hours"
              autoComplete="cleaning-hours"
              type="number"
            />
          </Grid>
          <Grid item xs={3.5}>
            <TextField
              required
              fullWidth
              name="status"
              id="status"
              label="Status"
              autoComplete="status"
              type="text"
            />
          </Grid>
          <Grid item xs={3.5}>
            <TextField
              required
              fullWidth
              name="last-online-time"
              id="last-online-time"
              label="Last Online Time"
              type="datetime-local"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add User
        </Button>
      </Box>
    </Box>
  );
};

export default RestPassword;
