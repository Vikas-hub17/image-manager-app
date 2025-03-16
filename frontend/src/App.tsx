import React from 'react';
import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './theme/Theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => (
    <>
     <ThemeProvider theme={theme}>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
            </ThemeProvider>
    </>
);

export default App;
