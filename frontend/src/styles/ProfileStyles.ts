import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
`;

export const ProfileSection = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2, h3 {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 1rem 0;
  border: 3px solid ${({ theme }) => theme.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};
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
