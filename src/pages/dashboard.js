import Sidebar from "../components/sidebar";
import { Grid, Typography } from "@mui/material";
import ViewUsers from "./viewUsers";
import NavLayout from "../NavLayout";

const Dashboard = () => {
  return (
    <>
      <NavLayout />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        mr={3}
      >
        <Grid item xs={2.8}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Typography marginTop={2} sx={{ fontWeight: "bold", p: 1 }}>
            <ViewUsers />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
