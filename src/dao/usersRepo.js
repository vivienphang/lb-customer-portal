import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../config/firebase";
import { doc, query, collection, getDocs, where } from "firebase/firestore";

// GET user who is logged in
export const getUserAuth = () => {
  let username, userUID, userEmail;
  const user = auth.currentUser;
  if (user !== null) {
    const username = user.displayName;
    const userUID = user.uid;
    const userEmail = user.email;
    console.log("In usersRepo - username: ", username)
    console.log("In usersRepo - userUID: ", userUID)
    console.log("In usersRepo - userEmail: ", userEmail)
  }
  return {username, userUID, userEmail}
};

// export const getUserAuth = async (userRefId) => {
//   try {
//     const userRef = collection(db, "users");
//     const q = query(userRef, where("uid", "==", userRefId));
//     const userData = await getDocs(q);
//     userData.forEach((doc) => {
//         id: doc.id
//     })
//     console.log("doc.id: ", doc.id)
//     //   if (querySnapshot.empty) {
//     //     console.log("No matching document found for Auth UID:", userRefId);
//     //     return [];
//     //   } else {
//     //     const matchingDocuments = [];
//     //     querySnapshot.forEach((doc) => {
//     //       matchingDocuments.push({
//     //         data: doc.data(),
//     //         id: doc.id,
//     //       });
//     //       console.log("Matching document ID: ", doc.id);
//     //     });
//     //     return matchingDocuments;
//     //   }
//     // const data = userData.docs[0].data();
//     console.log("data.name: ", userData)
//     // return data.name;
//   } catch (err) {
//     console.log("Error checking AuthUID: ", err);
//     return [];
//   }
// };
