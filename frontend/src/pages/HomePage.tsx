import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const LinkButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    margin: ${({ theme }) => theme.spacing.small};

    &:hover {
        background-color: #45a049;
    }
`;

const HomePage: React.FC = () => {
    return (
        <Container>
                <Navbar />
            <Title>Welcome to Image Manager</Title>
            <LinkButton to="/auth">Login / Register</LinkButton>
        </Container>
    );
};

export default HomePage;
