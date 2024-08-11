import React from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../App.css';

export default function Header() {
    const navigate = useNavigate();  // Initialize useNavigate

    return (
        <nav className="navbar">
            <img src="uni.jpeg" className="logo" alt="contentment"/>
            <h1 className="title">Find My University</h1>
            <div className="buttons">
                <button className="home" onClick={() => navigate('/')}>Home</button>
                <button className="login" onClick={() => navigate('/login')}>Login</button>
                <button className="sign-up" onClick={() => navigate('/register')}>Sign Up</button>
            </div>
        </nav>
    );
}
