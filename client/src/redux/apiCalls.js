import { publicRequest } from "../requestMethods";
import { userRequest } from "../requestMethods";
import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure
} from "./userSlice"
import { addProductSuccess } from "./cartSlice";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        localStorage.setItem("user-token", res.data.accessToken);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (user, dispatch) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post('/auth/register', user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
};

export const addToCart = async (product, dispatch) => {
    try {
        console.log("yess")
        const res = await userRequest.post('/carts', product);
        console.log("nooo")
        console.log(res.data)
        dispatch(addProductSuccess(res.data));
    } catch (err) {
    }
};

export const getUserCart = async (userId, dispatch) => {
    try {
        console.log("get ke andr")
        const res = await userRequest.get(`/carts/find/${userId}`);
        console.log("get backend se aya")
        console.log(res.data)
        dispatch(addProductSuccess(res.data));
    } catch (err) {
    }
};
