// /styles/AuthStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const Form = styled.form`
  background: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ErrorText = styled.p`
  background-color: #ffebeb;
  color: #d32f2f;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export const SuccessText = styled.p`
  background-color: #e7fbe7;
  color: #388e3c;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export const PasswordWrapper = styled.div`
  position: relative;

  input {
    padding-right: 40px;
  }

  span {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #666;
  }
`;

export const StrengthIndicator = styled.p<{ strength: string }>`
  margin-top: -0.5rem;
  text-align: left;
  font-size: 0.875rem;
  color: ${({ strength }) =>
    strength === "Weak"
      ? "#d32f2f"
      : strength === "Medium"
      ? "#f57c00"
      : "#388e3c"};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: left;
  margin-top: 1rem;

  label {
    color: #666;
    font-size: 0.875rem;
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

export const LinkText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
