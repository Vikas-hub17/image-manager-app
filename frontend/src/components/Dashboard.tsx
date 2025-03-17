// /components/Dashboard.tsx
import React from "react";
import {
  Container,
  DashboardCard,
  WelcomeText,
  InfoText,
  Button,
} from "../styles/DashboardStyles";

const Dashboard: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      window.location.href = "/";
    }
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
