import { userRequest } from "../requestMethods";

export const addToCart = async (product) => {
    const res = await userRequest.post('/carts', product);
    return res.data;
};

export const removeFromCart = async (id) => {
    const res = await userRequest.delete(`/carts/${id.userId}/${id.id}`);
    return res.data;
};

export const updateCart = async (obj) => {
    const res = await userRequest.put(`/carts/${obj._id}`, obj);
    return res.data;
};

export const getUserCart = async (userId) => {
    const res = await userRequest.get(`/carts/find/${userId}`);
    return res.data;
};
