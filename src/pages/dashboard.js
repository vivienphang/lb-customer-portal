import { useState, useEffect } from "react";
import BoardData from "../components/boardData";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

const Dashboard = ({ userDocId, userToken }) => {
  console.log("dashboard - userDocId: ", userDocId);
  console.log("dashboard - userToken: ", userToken);
  const userUID = localStorage.getItem("authUser");
  console.log("userUID: ", userUID);
  const [customerData, setCustomerData] = useState(null);

  const checkAuthUID = async (authUID) => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("userId", "==", authUID));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("No matching document found for Auth UID:", authUID);
      } else {
        querySnapshot.forEach((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        console.log("Matching document ID: ", doc.id);
        setCustomerData(querySnapshot);
      }
    } catch (err) {
      console.log("Error checking AuthUID: ", err);
    }
  };

  useEffect(() => {
    // getUsersData();
    if (userUID) {
      checkAuthUID(userUID);
    }
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

  // Fetching user's documents from Firestore
  // const fetchUserDocuments = async (documentId) => {
  //   try {
  //     const userDocs = [];
  //     // Reference the parent doc
  //     const parentDocRef = doc(db, "users", documentId);
  //     // Access the subcollection "customers"
  //     const subcollectionRef = collection(parentDocRef, "customers");
  //     // Get the documents in the subcollection
  //     const querySnapshot = await getDocs(subcollectionRef);
  //     console.log("query snapshot: ", querySnapshot);
  //     // Iterate over the query snapshot and extract the documents
  //     querySnapshot.forEach((doc) => {
  //       userDocs.push(doc.data());
  //     });
  //     console.log("userDocs: ", userDocs);
  //     return userDocs;
  //   } catch (error) {
  //     console.error("Error fetching user documents: ", error);
  //     return [];
  //   }
  // };

  // const getUserDocuments = async (documentId) => {
  //   try {
  //     const documents = await fetchUserDocuments(documentId);
  //     console.log("User documents: ", documents);
  //   } catch (error) {
  //     console.error("Error getting user documents: ", error);
  //   }
  // };
  // Query on page load
  // useEffect(() => {
  // if (!userToken) {
  //   return;
  // }
  // const userId = userToken?.uid;
  //   getUserDocuments(documentId);
  // }, [documentId]);

  // useEffect(() => {
  //   const fetchCustomerData = async () => {
  //     try {
  //       const docRef = doc(db, "users/vLAhK6Dh2nrnsM6q578g/customers", "1jMiasL3etXYAOjF55c6");
  //       const docSnap = await getDoc(docRef);
  //       console.log("doc snap:", docSnap)

  //       if (docSnap.exists()) {
  //         setCustomerData(docSnap.data())
  //       } else {
  //         console.log("Document doesn't exist.")
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchCustomerData()
  // }, [])

  return <BoardData userDocId={userDocId} customerData={customerData} />;
};

export default Dashboard;
