// /App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import DarkModeToggle from "./components/DarkModeToggle";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import { monitorTokenExpiry } from "./components/tokenExpiryHandler";

const AppRoutes: React.FC = () => {
  useEffect(() => {
    monitorTokenExpiry();
  }, []);
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Toaster position="top-right" reverseOrder={false} />
        <Router>
          <DarkModeToggle toggleTheme={() => setIsDarkMode(!isDarkMode)} />
          <AppRoutes />
        </Router>
      </ThemeProvider>
  );
};

export default App;
