import DataTable from "react-data-table-component";
import Sidebar from "../components/sidebar";
import { Grid, Typography } from "@mui/material";

const columns = [
  {
    name: "Users",
    selector: (row) => row.fullName,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Cleaning Hours",
    selector: (row) => row.cleaningHours,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Last Online Time",
    selector: (row) => row.lastOnline,
  },
  {
    name: "Action",
    selector: (row) => row.actions,
  },
];

const data = [
  {
    id: 1,
    fullName: "Brook Hilton",
    email: "bhilton@gmail.com",
    cleaningHours: 3640000,
    status: "Active",
    lastOnline: "2021-02-05 08:28:36",
    actions: "Edit or Delete",
  },
  {
    id: 2,
    fullName: "Hayleigh Frazier",
    email: "frazier.h@gmail.com",
    cleaningHours: 3652300,
    status: "Active",
    lastOnline: "2021-02-07 11:31:26",
    actions: "Edit or Delete",
  },
  {
    id: 3,
    fullName: "Hayleigh Frazier",
    email: "frazier.h@gmail.com",
    cleaningHours: 3652300,
    status: "Active",
    lastOnline: "2021-02-07 11:31:26",
    actions: "Edit or Delete",
  },
  {
    id: 4,
    fullName: "Hayleigh Frazier",
    email: "frazier.h@gmail.com",
    cleaningHours: 3652300,
    status: "Active",
    lastOnline: "2021-02-07 11:31:26",
    actions: "Edit or Delete",
  },
  {
    id: 5,
    fullName: "Hayleigh Frazier",
    email: "frazier.h@gmail.com",
    cleaningHours: 3652300,
    status: "Active",
    lastOnline: "2021-02-07 11:31:26",
    actions: "Edit or Delete",
  },
  {
    id: 6,
    fullName: "Hayleigh Frazier",
    email: "frazier.h@gmail.com",
    cleaningHours: 3652300,
    status: "Active",
    lastOnline: "2021-02-07 11:31:26",
    actions: "Edit or Delete",
  },
];

const ViewUsers = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {/* <Grid item xs={1}>
          <Sidebar />
        </Grid> */}

        <Grid item xs={12}>
          <Typography marginBottom={1} sx={{ fontWeight: "bold", p: 1 }}>
            View Users
          </Typography>
            <DataTable columns={columns} data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default ViewUsers;
