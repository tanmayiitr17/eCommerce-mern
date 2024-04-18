import axios from "axios";

const BASE_URL = "https://ecommerce-server-black.vercel.app/";
const TOKEN = localStorage.getItem("admin-token");
console.log(TOKEN)
// const TOKEN = ""
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
