
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Login = () => {
  return (
    <PageContainer>
      <Header>
        <h1>Login Page</h1>
      </Header>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </PageContainer>
  )
}

export default Login
