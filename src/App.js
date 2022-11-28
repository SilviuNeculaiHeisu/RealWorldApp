import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Home from "./pages/Home";
import BankAccounts from "./pages/BankAccounts";
import MyAccount from "./pages/MyAccount";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank-accounts" element={<BankAccounts />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}