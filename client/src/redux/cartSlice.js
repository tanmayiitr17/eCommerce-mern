import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [], 
    },
    reducers: {
        addProductSuccess: (state, action) => {
            state.carts.push(action.payload.products);
        },
        logoutCart: (state) => {
            state.carts = [];
        }
    }
})

export const { addProductSuccess, logoutCart } = cartSlice.actions;
export default cartSlice.reducer;