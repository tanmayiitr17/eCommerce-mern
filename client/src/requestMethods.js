import axios from "axios";

const BASE_URL = "https://ecommerce-mern-gamma.vercel.app/";

const TOKEN = localStorage.getItem("user-token");
console.log(TOKEN)
// Create axios instance for public requests (without authentication)
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
console.log(TOKEN)
console.log("TOKEN")
// Create axios instance for user requests (authenticated)
export const userRequest = axios.create({
    baseURL: BASE_URL,
    // Set token in the headers if it exists, otherwise exclude it
    headers: { token: `Bearer ${TOKEN}` }
});
