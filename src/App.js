import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ResetPassword from "./pages/resetPassword";
import NavLayout from "./NavLayout";
import AddUser from "./pages/addUser";
import { useState, useEffect } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  // state to check current user token
  const [userToken, setUserToken] = useState("");
  // state to check previous token
  const [prevToken, setPrevToken] = useState(localStorage.getItem("authUser"));
  const navigate = useNavigate();

  // use useEffect to render checkAuth whenever localstorage is changed
  // store localstorage value in a variable
  // check if localstorage prev state is not the same -> setIsUserAuthenticated false. if the same, return true.
  // this prevents infinite rendering

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authUser");
      console.log("localstorage", token);
      if (token === prevToken) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
      // if auth user exists, setIsUserAuthenticated to true
      if (!token) {
        return navigate("/");
      }
    };
    checkAuth();
  }, [prevToken]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home setUserToken={setUserToken} />} />
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
