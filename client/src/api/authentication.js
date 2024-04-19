import { publicRequest } from "../requestMethods";

export const login = async (user) => {
    const res = await publicRequest.post('/auth/login', user);
    // localStorage.setItem("user-token", res.data.accessToken);
    return res.data;
};

export const register = async (user) => {
    const res = await publicRequest.post('/auth/register', user);
    return res.data;
};
