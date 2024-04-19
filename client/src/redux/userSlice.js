import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = null;
            localStorage.removeItem("user-token");
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },

    }
})

export const {
    loginSuccess,
    logout,
    registerSuccess,
} = userSlice.actions;
export default userSlice.reducer;