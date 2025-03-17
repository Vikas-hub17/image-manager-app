// /styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const lightTheme = {
  background: "#f4f4f4",
  primary: "#6200ee",
  secondary: "#3700b3",
  text: "#000",
};

export const darkTheme = {
  background: "#121212",
  primary: "#bb86fc",
  secondary: "#3700b3",
  text: "#e0e0e0",
};
