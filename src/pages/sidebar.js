import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    MenuItem,
    Typography,
    Link,
  } from "@mui/material";
  import SpeedIcon from "@mui/icons-material/Speed";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
  
  const Sidebar = () => {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
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
            sx={{ backgroundColor: "transparent !important" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              // aria-controls="panel1a-content"
              // id="panel1a-header"
            >
              <Typography align="center">
                {/* <PersonOutlineOutlinedIcon
                  sx={{
                    alignItems: "center",
                    color: "black",
                    p: 1,
                  }}
                /> */}
                Users
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MenuItem>View Users</MenuItem>
              <MenuItem>Add Users</MenuItem>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion Menu 2</Typography>
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
  