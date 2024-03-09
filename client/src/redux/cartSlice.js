import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        total: 0,
    },
    reducers: {
        addProductSuccess: (state, action) => {
            console.log("first")
            console.log(action.payload)
            // state.carts = [...state.carts, action.payload];
            state.carts.push(action.payload);
        },
        deleteProductSuccess: (state, action) => {
            state.carts.pop();
        }
    }
})

export const { addProductSuccess, deleteProductSuccess } = cartSlice.actions;
export default cartSlice.reducer;