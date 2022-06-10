import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/Signup";
import SideBar from "./components/SideBar";
import Downloads from "./pages/Downloads/Downloads";
import Audience from "./pages/Audience/audience";
import "antd/dist/antd.min.css";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SideBar />}>
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/audience" element={<Audience />} />
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
