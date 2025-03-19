// /components/Dashboard.tsx
import React from "react";
import {
  Container,
  DashboardCard,
  WelcomeText,
  InfoText,
  Button,
} from "../styles/DashboardStyles";
import { useNavigate } from "react-router-dom";


const Dashboard: React.FC = () => {const navigate = useNavigate(); // Add this
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");  // Clear the token
    navigate("/");  // Redirect to login page
  };  

  return (
    <Container>
      <DashboardCard>
        <WelcomeText>Welcome, {user.name}!</WelcomeText>
        <InfoText>Email: {user.email}</InfoText>

        <Button onClick={handleLogout}>Logout</Button>
      </DashboardCard>
    </Container>
  );
};

export default Dashboard;
