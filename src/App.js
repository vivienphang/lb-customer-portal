import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ResetPassword from "./pages/resetPassword";
import NavLayout from "./NavLayout";
import AddUser from "./pages/addUser";
import { useState, useEffect } from "react";
import { getUserAuth } from "./dao/usersRepo";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState({});
  // state to check previous token
  const [prevToken, setPrevToken] = useState(localStorage.getItem("authUser"));
  const [userDocId, setUserDocId] = useState("");
  const navigate = useNavigate();

  // use useEffect to render checkAuth whenever localstorage is changed
  // store localstorage value in a variable
  // check if localstorage prev state is not the same -> setIsUserAuthenticated false. if the same, return true.
  // this prevents infinite rendering

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authUser");
      console.log("token in App - ", token);
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

  // useEffect(() => {
  //   const token = localStorage.getItem("authUser");
  //   if (!token) {
  //     setIsUserAuthenticated(false);
  //     return navigate("/");
  //   } else {
  //     getUserAuth();
  //     setUserToken()
  //     setIsUserAuthenticated(true);
  //   }
  // }, [prevToken])

  // useEffect(() => {
  //   if (!prevToken) {
  //     return;
  //   } else {
  //     const token = localStorage.getItem("authUser");
  //     getUserAuth(token);
  //   }
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userToken={userToken}
              setUserToken={setUserToken}
              userDocId={userDocId}
              setUserDocId={setUserDocId}
            />
          }
        />
        {isUserAuthenticated && (
          <Route
            path="/dashboard"
            element={<NavLayout userToken={userToken} prevToken={prevToken} />}
          >
            <Route
              index
              element={
                <Dashboard userToken={userToken} userDocId={userDocId} />
              }
            />
            {/* <Route path="edit" element={<EditUser  userToken={userToken}/>} /> */}
            <Route
              path="add-user"
              element={
                <AddUser
                  userToken={userToken}
                  userDocId={userDocId}
                  setUserDocId={setUserDocId}
                />
              }
            />
            <Route
              path="reset"
              element={<ResetPassword userToken={userToken} />}
            />
          </Route>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
