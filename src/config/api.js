import axios from "axios"

export const API_BASE_URL = "https://e-commerce-backend-6rz1.onrender.com"

const tokenData = localStorage.getItem("token");
const token = tokenData ? JSON.parse(tokenData).token : null;

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    },
});