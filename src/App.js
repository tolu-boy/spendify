import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/Signup";
import SideBar from "./components/SideBar";
import Downloads from "./pages/Downloads/Downloads";
import Audience from "./pages/Audience/Audience";
import Income from "./pages/Behaviour/Income"
import Transaction from "./pages/Behaviour/Transactions";
import Budgeting from "./pages/Behaviour/Budgeting";
import Expense from "./pages/Behaviour/Expense";
import "antd/dist/antd.min.css";
import "./index.css";

function App() {
  console.log(window.location.pathname);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<SideBar />}>
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/behaviour/income" element={<Income />} />
            <Route path="/behaviour/bank-transaction" element={<Transaction />} />
            <Route path="/behaviour/budgeting" element={<Budgeting />} />
            <Route path="/behaviour/expense" element={<Expense />} />

          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
