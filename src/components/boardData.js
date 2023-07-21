import DataTable from "react-data-table-component";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

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
    selector: (row) => row.lastOnlineTime,
  },
  {
    name: "Action",
    selector: (row) => row.actions,
  },
];

const BoardData = ({ userDocId, customerData }) => {
  console.log("userDocId: ", userDocId)
  const navigate = useNavigate();

  const displayCustomersData = () => {
    const mappingCustomersData = customerData.map((el, index) => {

      return {
        ...el,
        actions: (
          <>
            <Link to={`/edit/${1}`}>Edit</Link> or{" "}
            <Link to={`/delete/${2}`}>Delete</Link>
          </>
        ),
      };
    });
    return mappingCustomersData;
  };

  // Button handler
  const handleAddUserButton = () => {
    navigate("/dashboard/add-user");
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography marginBottom={1} sx={{ fontWeight: "bold", p: 1 }}>
          View Users
        </Typography>
        <Button size="small" variant="contained" onClick={handleAddUserButton}>
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
          <DataTable columns={columns} data={displayCustomersData()} selectableRows pagination />
        </Grid>
      </Grid>
    </>
  );
};

export default BoardData;
