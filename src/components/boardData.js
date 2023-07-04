import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
// import Sidebar from "../components/sidebar";
import { Box, Grid, Typography, Button } from "@mui/material";

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

const BoardData = () => {
  // State to track all users
  const [usersList, setUsersList] = useState([]);

  // Make reference to users collection in firebase
  const usersCollectionRef = collection(db, "users");

  // Query db on page load
  useEffect(() => {
    const getUsersList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        console.log("data:", data);
      } catch (err) {
        console.error(err);
      }
    };
    getUsersList();
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography marginBottom={1} sx={{ fontWeight: "bold", p: 1 }}>
          View Users
        </Typography>
        <Button size="small" variant="contained">
          {" "}
          + Add Users
        </Button>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <DataTable columns={columns} data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default BoardData;
