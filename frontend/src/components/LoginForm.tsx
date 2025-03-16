import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
  transition: border 0.3s ease;
  &:focus {
    outline: none;
    border-color: #18BC9C;
  }
`;

const Button = styled.button`
  background-color: #18BC9C;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #F39C12;
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('/auth/login', { username, password })
      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Label>
        Username:
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </Label>
      <Label>
        Password:
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Label>
      <Button type="submit">Login</Button>
    </FormContainer>
  )
}

export default LoginForm
