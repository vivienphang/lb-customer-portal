import Sidebar from "../components/sidebar";
import { Grid, Typography } from "@mui/material";
import ViewUsers from "./viewUsers";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
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
