import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
        text-decoration: underline;
    }
`;

const Navbar: React.FC = () => (
    <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </Nav>
);

export default Navbar;
