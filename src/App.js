import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./homepage/Header";
import Mainbody from "./homepage/Mainbody";
import Login from "./loginpage/Login";
import Register from "./signuppage/Register";
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
