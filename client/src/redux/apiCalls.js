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
import { addProductSuccess, removeSuccess, updateSuccess } from "./cartSlice";

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
        const res = await userRequest.post('/carts', product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
    }
};

export const removeFromCart = async (id, dispatch) => {
    console.log("aaya")
    try {
        console.log("aur aaya")
        const res = await userRequest.delete(`/carts/${id}`);
        console.log("call hogya")
        dispatch(removeSuccess(res.data));
    } catch (err) {
    }
};

export const updateCart = async (obj, dispatch) => {
    console.log("aaya")
    try {
        console.log("aur aaya")
        const res = await userRequest.put(`/carts/${obj._id}`, obj);
        console.log(res)
        dispatch(updateSuccess(res.data));
    } catch (err) {
    }
};

export const getUserCart = async (userId, dispatch) => {
    try {
        const res = await userRequest.get(`/carts/find/${userId}`);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
    }
};
