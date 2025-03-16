import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const Login: React.FC = () => {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Login Successful!');
    };

    return (
        <Form onSubmit={handleLogin}>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
        </Form>
    );
};

export default Login;
