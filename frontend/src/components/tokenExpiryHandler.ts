import { removeToken } from "../services/authService";
import { toast } from "react-hot-toast";

export const monitorTokenExpiry = () => {
  const token = localStorage.getItem("auth_token");
  if (!token) return;

  const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
  const expiryTime = tokenPayload.exp * 1000; // Convert to milliseconds

  const currentTime = new Date().getTime();
  const remainingTime = expiryTime - currentTime;

  if (remainingTime <= 0) {
    removeToken();
    window.location.href = "/";
    toast.error("Session expired. Please log in again.");
  } else {
    setTimeout(() => {
      removeToken();
      window.location.href = "/";
      toast.error("Session expired. Please log in again.");
    }, remainingTime);
  }
};
