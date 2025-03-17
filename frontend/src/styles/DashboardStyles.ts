// /styles/DashboardStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const DashboardCard = styled.div`
  background: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const WelcomeText = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

export const InfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #555;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
  }
`;
