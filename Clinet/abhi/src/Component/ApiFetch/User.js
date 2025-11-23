import axios from "axios";
import dotenv from 'dotenv';
const API_URL = import.meta.env.API || "http://localhost:8000/api/v1"; // fallback if env missing

const LoginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials, {
      withCredentials: true,
    });
    return response.data; // return data to component
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error; // allow handling in caller
  }
};
const signupUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, credentials, {
      withCredentials: true,
    });
    return response.data; // return data to component
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error; // allow handling in caller
  }
};

export const userData = {
  LoginUser,
  signupUser
};
