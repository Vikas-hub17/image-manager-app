import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.error};
`;

const LinkButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    margin-top: ${({ theme }) => theme.spacing.medium};

    &:hover {
        background-color: #45a049;
    }
`;

const NotFoundPage: React.FC = () => (
    <Container>
        <Title>404 - Page Not Found</Title>
        <LinkButton to="/">Go to Home</LinkButton>
    </Container>
);

export default NotFoundPage;
