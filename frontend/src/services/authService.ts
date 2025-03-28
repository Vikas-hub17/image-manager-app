// /services/authService.ts
export const TOKEN_KEY = "auth_token";

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken"); // Or sessionStorage if needed
  return !!token; // Returns true if token exists
};

