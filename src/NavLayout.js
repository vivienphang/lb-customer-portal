import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "./pages/assets/Logo_thumbnail.png";


const NavLayout = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(249,223,198,1) 0%, rgba(215,163,233,1) 42%, rgba(99,145,228,1) 100%)",
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={9} container spacing={1}>
              <Link to="/">
                <Box
                  component="img"
                  sx={{ height: 45, width: 60 }}
                  alt="logo-thumbnail"
                  src={Logo}
                  marginRight={2}
                ></Box>
              </Link>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="p"
                color="#b87619"
              >
                LionsBot Customer Portal
              </Typography>
            </Grid>
            <Grid item xs={3} display="flex" justifyContent="space-evenly">
              <IconButton size="small" sx={{ p: 1 }}>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>

              <IconButton size="small" sx={{ p: 1 }}>
                <HelpOutlineIcon sx={{ color: "white" }} />
              </IconButton>

              <IconButton size="small" sx={{ p: 1 }}>
                <Badge badgeContent={17} color="error">
                  <NotificationsNoneIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>

              <IconButton size="small" sx={{ p: 1 }}>
                <AccountCircleIcon sx={{ color: "white" }} />
                <Typography>John Doe</Typography>
              </IconButton>

              <IconButton size="small" sx={{ p: 1 }}>
                <TranslateIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box mt={8}>
        <Outlet />
      </Box>
    </>
  );
};

export default NavLayout;
