import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Logout = () => {
  const logoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return <Button onClick={logoutHandler}>Logout</Button>;
};

export default Logout;
