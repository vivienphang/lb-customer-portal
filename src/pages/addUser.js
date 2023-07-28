import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";

const AddUser = ({ userDocId, setUserDocId }) => {
  console.log("userDocId prop - ", userDocId)

  // Create function to add user list into database
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
    });
  };

  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" textAlign="center">
        Add User
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2} justifyContent="center">
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
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add User
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddUser;
