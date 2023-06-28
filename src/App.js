import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ViewUsers from "./pages/viewUsers";
import NavLayout from "./NavLayout";
import { db } from "./config/firebase";
import {getDocs, collection} from "firebase/firestore"
function App() {
  // State to track all users
  const [userList, setUserList] = useState([]);

  // Make reference to users collection in firebase 
  const usersCollectionRef = collection(db, "users")

  // Query db on page load
  useEffect(() => {
    const getUserList = async () => {
      // Read data
      // Set the setUserList
      try {
        const data = await getDocs(usersCollectionRef)
        console.log("data:", data)

      } catch (err) {
        console.error(err)
      }
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<NavLayout />}>
          <Route index element={<Dashboard />} />
          <Route path=":id" element={<h4>Single user's page</h4>} />
          <Route path="view-users" element={<ViewUsers />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
