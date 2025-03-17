// /components/GoogleLoginButton.tsx
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = (response: any) => {
    const decodedToken: any = jwtDecode(response.credential);
    console.log("User Data:", decodedToken);
    
    // Simulate storing user data
    localStorage.setItem("user", JSON.stringify(decodedToken));
    alert(`Welcome, ${decodedToken.name}!`);
    
    navigate("/dashboard");
  };

  const handleError = () => {
    alert("Google Sign-in failed. Please try again.");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;
