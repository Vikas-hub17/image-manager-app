import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.body};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        transition: color 0.3s ease-in-out;

        &:hover {
            color: darken(${({ theme }) => theme.colors.primary}, 10%);
        }
    }
`;
