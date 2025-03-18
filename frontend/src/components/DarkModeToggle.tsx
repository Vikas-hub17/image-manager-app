// /components/DarkModeToggle.tsx
import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

interface DarkModeToggleProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </ToggleButton>
  );
};

export default DarkModeToggle;
