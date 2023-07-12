import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ResetPassword from "./pages/resetPassword";
import NavLayout from "./NavLayout";
import AddUser from "./pages/addUser";
import { useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // create function to check user authentication that expects UID token as parameter
  // pass this function as prop to Home component
  // const checkUserAuth = () => {
  //   console.log("localstorage GET:", localStorage.getItem("authUser"));
  //   localStorage.getItem("authUser")
  //     ? setIsUserAuthenticated(true)
  //     : setIsUserAuthenticated(false);
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {isUserAuthenticated && (
          <Route path="/dashboard" element={<NavLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
