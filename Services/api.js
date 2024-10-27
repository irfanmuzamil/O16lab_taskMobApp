import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (data) => {
  return await axios.post(`${API_URL}/signup`, data);
};

export const login = async (data) => {
  return await axios.post(`${API_URL}/login`, data);
};

export const forgotPassword = async (data) => {
  return await axios.post(`${API_URL}/forgot-password`, data);
};

export const verifyOTP = async (data) => {
  return await axios.post(`${API_URL}/verify-otp`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${API_URL}/reset-password`, data);
};
