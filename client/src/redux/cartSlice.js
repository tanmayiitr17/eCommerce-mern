import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        total: 0,
    },
    reducers: {
        addProductSuccess: (state, action) => {
            state.carts.push(action.payload.products);
        },
        removeSuccess: (state, action) => {
            const productIndex = carts[0].findIndex(product => product._id.toString() === action.payload?.id);
            // Remove the product from the products array
            state.carts[0].splice(productIndex, 1);
        },
        updateSuccess: (state, action) => {
            state.carts.pop();
        }
    }
})

export const { addProductSuccess, removeSuccess, updateSuccess } = cartSlice.actions;
export default cartSlice.reducer;