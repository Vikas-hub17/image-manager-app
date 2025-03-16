import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

interface AuthData {
    username: string;
    password: string;
}

export const signup = async (userData: AuthData) => {
    return await axios.post(`${API_BASE_URL}/auth/signup`, userData);
};

export const login = async (userData: AuthData) => {
    return await axios.post(`${API_BASE_URL}/auth/login`, userData);
};

export const logout = async () => {
    return await axios.post(`${API_BASE_URL}/auth/logout`);
};

export const sendVerificationEmail = async (email: string) => {
    return await axios.post(`${API_BASE_URL}/auth/send-verification-email`, { email });
};
