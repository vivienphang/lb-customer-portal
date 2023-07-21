import { useState, useEffect } from "react";
import BoardData from "../components/boardData";
import { getCustomerWithSpecificId } from "../dao/customersRepo";

const Dashboard = ({ userDocId, userToken }) => {
  const userUID = localStorage.getItem("authUser");
  console.log("userUID: ", userUID);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const getCustomerByUserId = async (userUID) => {
      if (userUID) {
        try {
          const userData = await getCustomerWithSpecificId(userUID);
          console.log("userData in Dashboard: ", userData);
          setCustomerData(userData)
        } catch (err) {
          console.log("Error in dashboard useEffect: ", err);
        }
      }
    };
    getCustomerByUserId(userUID);
  }, [userUID]);

  return <BoardData userDocId={userDocId} customerData={customerData} />;
};

export default Dashboard;
