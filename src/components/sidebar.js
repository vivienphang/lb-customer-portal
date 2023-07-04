import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    MenuItem,
    Typography,
    // Link,
  } from "@mui/material";
  import SpeedIcon from "@mui/icons-material/Speed";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  // import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
  import { useNavigate } from "react-router-dom";
  
  const Sidebar = () => {
    const navigate = useNavigate()

    const handleAddUser = () => {
      navigate("/dashboard/add-user")
    }

    const handleViewUsers = () => {
      navigate("/dashboard")
    }

    return (
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            p: 2,
          }}
        >
          <MenuItem>
            <SpeedIcon sx={{ color: "black" }} />
            <Typography variant="p" color="black" marginLeft={3}>
              Dashboard
            </Typography>
          </MenuItem>
          <Accordion
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography align="center">
                Users
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MenuItem onClick={handleViewUsers}>View Users</MenuItem>
              <MenuItem onClick={handleAddUser}>Add Users</MenuItem>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>Robots</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Text goes here ...</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>Reports</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Text goes here ...</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </div>
    );
  };
  
  export default Sidebar;
  