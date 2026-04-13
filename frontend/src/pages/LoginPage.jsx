import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // For this version, we validate against our fixed credentials
        if (username === 'dev' && password === 'devlog2026') {
            authService.login(username, password);
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg-primary)' }}>
            <div style={{ width: '100%', maxWidth: '400px' }}>
                <Card title="DevLog Login" subtitle="Please enter your developer credentials">
                    <form onSubmit={handleLogin}>
                        {error && <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                        <input 
                            className="form-control" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <Button type="submit" style={{ width: '100%', marginTop: '1rem' }}>Login</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
