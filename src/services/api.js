import axios from "axios";

const API = axios.create({
  baseURL: "https://pendrive-backend-h0n3.onrender.com/api/" 
});

// Register pendrive (admin / testing)
export const registerPendrive = (data) =>
  API.post("/register", data);

// Verify email + send OTP
export const verifyEmail = (data) =>
  API.post("/verify-email", data);

// Verify OTP
export const verifyOtp = (data) =>
  API.post("/verify-otp", data);
