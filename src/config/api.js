import axios from "axios"

export const API_BASE_URL = "https://e-commerce-backend-6rz1.onrender.com"
export const api = axios.create({
    baseURL: API_BASE_URL,
});