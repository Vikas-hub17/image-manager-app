// /components/Login.tsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Input,
  Button,
  LinkText,
  PasswordWrapper,
  StrengthIndicator,
  CheckboxWrapper,
} from "../styles/AuthStyles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("prefillEmail");
    const storedPassword = sessionStorage.getItem("prefillPassword");
  
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  
    // Clear session storage after auto-filling
    sessionStorage.removeItem("prefillEmail");
    sessionStorage.removeItem("prefillPassword");
  }, []);  

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

    if (!email || !password) {
        toast.error("All fields are required.");
        return;
    }

    if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return;
    }

    setLoading(true);

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }) // Correct structure
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login successful:', data);
            toast.success("Login successful!");
        } else {
            toast.error(data.error || "Login failed. Please try again.");
        }
    } catch (err) {
        console.error('Error during login:', err);
        toast.error("Network error. Please try again later.");
    } finally {
        setLoading(false);
    }
};

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>

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
