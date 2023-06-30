import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ViewUsers from "./pages/viewUsers";
import NavLayout from "./NavLayout";
import ResetPassword from "./pages/resetPassword";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<NavLayout />}>
          <Route index element={<Dashboard />} />
          <Route path=":id" element={<h4>Single user's page</h4>} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="view-users" element={<ViewUsers />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
