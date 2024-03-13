import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        total: 0,
    },
    reducers: {
        addProductSuccess: (state, action) => {
            state.carts.push(action.payload);
        },
        removeSuccess: (state, action) => {
            state.carts.pop();
        },
        updateSuccess: (state, action) => {
            state.carts.pop();
        }
    }
})

export const { addProductSuccess, removeSuccess, updateSuccess } = cartSlice.actions;
export default cartSlice.reducer;