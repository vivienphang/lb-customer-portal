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

  // const getUsersData = () => {
  //   const usersCollectionRef = collection(db, "users");
  //   getDocs(usersCollectionRef)
  //     .then((response) => {
  //       const userData = response.docs.map(doc => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log(userData[0].data.customers)
  //       const customerDetails = userData[0].data.customers
  //       setCustomerData(customerDetails);
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  // Query on page load
  // useEffect(() => {
  // if (!userToken) {
  //   return;
  // }
  // const userId = userToken?.uid;
  //   getUserDocuments(documentId);
  // }, [documentId]);

  return <BoardData userDocId={userDocId} customerData={customerData} />;
};

export default Dashboard;
