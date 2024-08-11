import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/users/login', { email, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            })
            .catch(error => {
                setErrorMessage('Invalid email or password');
            });
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <a href="/register" className="link">Don't have an account? Register</a>
            </form>
        </div>
    );
}
