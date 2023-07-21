import { db } from "../config/firebase";
import { doc, query, collection, getDocs, where } from "firebase/firestore";

// GET user with specific Id
export const getCustomerWithSpecificId = async (userRefId) => {
  try {
    const userRef = collection(db, "customers");
    const q = query(userRef, where("userRefId", "==", userRefId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching document found for userRefId:", userRefId);
      return [];
    } else {
      const matchingDocuments = [];
      querySnapshot.forEach((doc) => {
        matchingDocuments.push(doc.data());
      });
      console.log("Matching documents: ", matchingDocuments);
      return matchingDocuments;
    }
  } catch (err) {
    console.log("Error checking userRefId: ", err);
    return [];
  }
};
