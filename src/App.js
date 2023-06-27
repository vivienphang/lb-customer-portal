import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import AddUser from "./pages/addUser";
import NavLayout from "./NavLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<NavLayout />}>
          <Route index element={<Dashboard />} />
          <Route path=":id" element={<h4>Single user's page</h4>} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
