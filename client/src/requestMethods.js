import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

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
