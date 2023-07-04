// import { Grid, Typography } from "@mui/material";
// import BoardData from "../components/boardData";

// const Dashboard = () => {
//   return (
//     <>
//       <Grid
//         container
//         direction="row"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         mr={3}
//       >
//         <Grid item xs={9}>
//           {/* <Typography marginTop={2} sx={{ fontWeight: "bold", p: 1 }}> */}
//             <BoardData />
//           {/* </Typography> */}
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Dashboard;

import { Grid } from "@mui/material";
import NavLayout from "../NavLayout";
import BoardData from "../components/boardData";

const Dashboard = () => {
  return (
    // <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
    //   <Grid item xs={3}>
    //     <NavLayout />
    //   </Grid>
    //   <Grid item xs={9}>
        <BoardData />
    //   </Grid>
    // </Grid>
  );
};

export default Dashboard;

