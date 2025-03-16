import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
`;

export const FormWrapper = styled.div`
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
`;

export const Title = styled.h1`
    text-align: center;
    color: #4CAF50;
`;

export const LinkText = styled.p`
    text-align: center;
    color: #4CAF50;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #45a049;
    }
`;

export const ErrorText = styled.p`
    color: red;
    text-align: center;
    margin-top: 10px;
`;
