// /components/Register.tsx
import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  Button,
  LinkText,
  ErrorText,
  SuccessText,
  PasswordWrapper,
  StrengthIndicator,
} from "../styles/AuthStyles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Email Validation Regex
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password Strength Checker
  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return "Weak";
    if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/.test(password)) {
      return "Strong";
    }
    return "Medium";
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordStrength(checkPasswordStrength(value));
  };

  const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null); 
      setSuccess(null); 
    
      if (!name || !email || !password || !confirmPassword) {
        setError("All fields are required.");
        return;
      }
  
      if (!isValidEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }
  
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
  
      setLoading(true);
  
      try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: name,
                email,
                password
            })
        });

        const data = await response.json(); // Attempt to parse JSON response

        if (!response.ok) {
            console.error("Server error:", data); // Log the full response
            throw new Error(data.error || "Registration failed.");
        }

        sessionStorage.setItem("prefillEmail", email);
        sessionStorage.setItem("prefillPassword", password);

        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/"), 2000);

    } catch (err: any) {
        console.error("Registration error:", err);
        setError(err.message || "An unexpected error occurred. Please check the console.");
    }
}; 
  
  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <h2>Register</h2>

        {error && <ErrorText>{error}</ErrorText>}
        {success && <SuccessText>{success}</SuccessText>}

        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <PasswordWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </PasswordWrapper>

        {password && (
          <StrengthIndicator strength={passwordStrength}>
            Password Strength: {passwordStrength}
          </StrengthIndicator>
        )}

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>

        <LinkText>
          Already have an account? <a href="/">Login here</a>
        </LinkText>
      </Form>
    </Container>
  );
};

export default Register;
