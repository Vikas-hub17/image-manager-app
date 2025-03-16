import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const Header = styled.header`
  margin-bottom: 1.5rem;
  h1 {
    font-size: 2.5rem;
  }
`;

const Nav = styled.nav`
  a {
    margin: 0 1rem;
    font-size: 1.1rem;
    color: #18BC9C;
    text-decoration: none;
    &:hover {
      color: #F39C12;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <h1>Welcome to the Image Manager App</h1>
      </Header>
      <Nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </Nav>
    </HomeContainer>
  )
}

export default Home
