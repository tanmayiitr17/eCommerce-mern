import { publicRequest, userRequest } from "../requestMethods";
import {
    loginStart,
    loginSuccess,
    loginFailure,
} from "./userSlice";
import {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,
} from './productSlice';
import {
    getCustomerStart,
    getCustomerSuccess,
    getCustomerFailure,
    deleteCustomerStart,
    deleteCustomerSuccess,
    deleteCustomerFailure,
    updateCustomerStart,
    updateCustomerSuccess,
    updateCustomerFailure,
    addCustomerStart,
    addCustomerSuccess,
    addCustomerFailure,
} from './customerSlice';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        localStorage.setItem("admin-token", res.data.accessToken);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

// export const logout = async (dispatch, user) => { 
//     try {
//         const res = await userRequest.post('/auth/login', user);
//         dispatch(logoutSuccess(res.data));
//     } catch (err) { 
//     }
// };



//-----------------------------PRODUCT--------------------------------------------------


export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess(res.data));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post('/products', product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
}



//-----------------------------CUSTOMER--------------------------------------------------

export const getCustomers = async (dispatch) => {
    dispatch(getCustomerStart());
    try {
        const res = await userRequest.get('/users');
        dispatch(getCustomerSuccess(res.data));
    } catch (err) {
        dispatch(getCustomerFailure());
    }
};

export const deleteCustomer = async (id, dispatch) => {
    dispatch(deleteCustomerStart());
    try {
        const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteCustomerSuccess(id));
    } catch (err) {
        dispatch(deleteCustomerFailure());
    }
};

export const updateCustomer = async (id, user, dispatch) => {
    dispatch(updateCustomerStart());
    try {
        const res = await userRequest.put(`/users/${id}`, user);
        dispatch(updateCustomerSuccess(res.data));
    } catch (err) {
        dispatch(updateCustomerFailure());
    }
};

export const addCustomer = async (user, dispatch) => {
    dispatch(addCustomerStart());
    try {
        const res = await userRequest.post('/auth/register', user);
        dispatch(addCustomerSuccess(res.data));
    } catch (err) {
        dispatch(addCustomerFailure());
    }
}
