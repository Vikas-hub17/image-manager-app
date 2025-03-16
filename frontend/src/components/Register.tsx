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

const Register: React.FC = () => {
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Registration Successful!');
    };

    return (
        <Form onSubmit={handleRegister}>
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Register</Button>
        </Form>
    );
};

export default Register;
