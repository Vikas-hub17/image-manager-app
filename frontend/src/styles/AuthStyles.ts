import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid #4CAF50;
    border-radius: 5px;
`;

export const Button = styled.button`
    background-color: #4CAF50;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

export const Message = styled.p`
    color: red;
    font-weight: bold;
`;
