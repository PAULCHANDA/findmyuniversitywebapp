import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./homepage/Home";
import Login from "./loginpage/Login";
import Register from "./signuppage/Register";
import Search from "./Search";
import './App.css';

export default function App() {
  return (
    <Router>
      <Search />
      
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/Login" element={<Login />} />

        
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}
