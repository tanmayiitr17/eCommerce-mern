import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        customers: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL CUSTOMERS

        getCustomerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getCustomerSuccess: (state, action) => {
            state.isFetching = false;
            state.customers = action.payload;
        },
        getCustomerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //DELETE CUSTOMER

        deleteCustomerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteCustomerSuccess: (state, action) => {
            state.isFetching = false;
            state.customers.splice(
                state.customers.findIndex((customer) => customer._id === action.payload),
                1
            )
        },
        deleteCustomerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //UPDATE CUSTOMER

        updateCustomerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateCustomerSuccess: (state, action) => {
            state.isFetching = false;
            state.customers[state.customers.findIndex((customer) => customer._id === action.payload._id)] = action.payload;
            //[1,2,3,4,5][2]=10 ===> [1,2,10,4,5]
        },
        updateCustomerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //ADD CUSTOMER

        addCustomerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addCustomerSuccess: (state, action) => {
            state.isFetching = false;
            state.customers.push(action.payload);
        },
        addCustomerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const {
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
} = customerSlice.actions;

export default customerSlice.reducer;