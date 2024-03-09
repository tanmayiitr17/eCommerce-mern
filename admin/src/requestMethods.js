import axios from "axios";

const BASE_URL = "https://ecommerce-mern-gamma.vercel.app/";
const TOKEN = localStorage.getItem("admin-token");
// const TOKEN = ""
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
