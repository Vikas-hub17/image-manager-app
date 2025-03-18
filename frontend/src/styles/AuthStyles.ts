// /styles/AuthStyles.ts
import styled from "styled-components";

// Main Container for Forms
export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

// Form Styling
export const Form = styled.form`
  background: #ffffff;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }
`;

// Input Field Styling
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

// Password Field Wrapper
export const PasswordWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #4caf50;
  }
`;

// Button Styling
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

// Error & Success Messages
export const ErrorText = styled.p`
  color: #f44336;
  background-color: #ffe6e6;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SuccessText = styled.p`
  color: #4caf50;
  background-color: #e8f5e9;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`;

// Password Strength Indicator
export const StrengthIndicator = styled.p<{ strength: string }>`
  color: ${({ strength }) =>
    strength === "Weak"
      ? "#f44336"
      : strength === "Medium"
      ? "#ff9800"
      : "#4caf50"};
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;
`;

// Checkbox Wrapper
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;

  label {
    font-size: 14px;
    color: #333;
  }
`;

// Link Text
export const LinkText = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
