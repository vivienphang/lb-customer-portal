import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ResetPassword from "./pages/resetPassword";
import NavLayout from "./NavLayout";
import AddUser from "./pages/addUser"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" > */}
        <Route path="/dashboard" element={<NavLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="add-user" element={<AddUser/>} />
          <Route path="reset" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
