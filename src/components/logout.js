import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      // clear localstorage
      localStorage.removeItem("authUser");
      console.log(localStorage.getItem("authUser"));
      navigate("/");
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button variant="contained" onClick={logoutHandler}>
      Logout
    </Button>
  );
};

export default Logout;
