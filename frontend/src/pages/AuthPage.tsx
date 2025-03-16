import React, { useState } from 'react';
import { AuthContainer, FormWrapper, Title, LinkText } from '../styles/AuthStyles';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <AuthContainer>
            <FormWrapper>
                <Title>{isLogin ? 'Login' : 'Register'}</Title>
                {isLogin ? <Login /> : <Register />}
                <LinkText onClick={toggleForm}>
                    {isLogin
                        ? "Don't have an account? Register here"
                        : "Already have an account? Login here"}
                </LinkText>
            </FormWrapper>
        </AuthContainer>
    );
};

export default AuthPage;
