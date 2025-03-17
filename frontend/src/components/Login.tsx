// /components/Login.tsx
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
  CheckboxWrapper,
} from "../styles/AuthStyles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 
    setSuccess(null); 

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (email === "test@example.com" && password === "password123") {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        setError("Invalid email or password.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <ErrorText>{error}</ErrorText>}
        {success && <SuccessText>{success}</SuccessText>}

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

        <CheckboxWrapper>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label>Remember Me</label>
        </CheckboxWrapper>

        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <LinkText>
          <a href="/forgot-password">Forgot Password?</a>
        </LinkText>

        <LinkText>
          Don't have an account? <a href="/register">Register here</a>
        </LinkText>
      </Form>
    </Container>
  );
};

export default Login;
