import React, { useState } from 'react';
import { signup, login } from '../api/authApi';
import { Container, Form, Input, Button, Message } from '../styles/AuthStyles';

const Auth: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSignup = async () => {
        try {
            await signup({ username, password });
            setMessage('Signup successful! Please log in.');
        } catch (error) {
            setMessage('Signup failed. Try again.');
        }
    };

    const handleLogin = async () => {
        try {
            await login({ username, password });
            setMessage('Login successful!');
        } catch (error) {
            setMessage('Login failed. Check your credentials.');
        }
    };

    return (
        <Container>
            <h2>User Authentication</h2>
            <Form>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleSignup}>Sign Up</Button>
                <Button onClick={handleLogin}>Log In</Button>
            </Form>
            {message && <Message>{message}</Message>}
        </Container>
    );
};

export default Auth;
