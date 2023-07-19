import { useEffect } from "react";
import BoardData from "../components/boardData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Dashboard = ({ userDocId }) => {
  console.log("inside dashboard: ", userDocId);
  // State to track users data
  // const [customerData, customerData] = useState([]);

  // Make reference to users collection in firebase
  // const usersCollectionRef = collection(db, "users", userDocId, "customers")
  const [values, loading, error, snapshot] =
    useCollectionData(query, options);
  // Query db on page load
  useEffect(() => {
    const getUserList = async () => {
      try {
        // const data = await getDocs(usersCollectionRef)
        // console.log("data:", data)
        await FirebaseFirestore.instance;
      } catch (err) {
        console.error(err);
      }
    };
    getUserList();
  }, []);

  return (
    // <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
    //   <Grid item xs={9}>
    <BoardData userDocId={userDocId} />
    //   </Grid>
    // </Grid>
  );
};

export default Dashboard;
