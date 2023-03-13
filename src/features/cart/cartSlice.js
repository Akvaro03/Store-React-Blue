import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const storeSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct: (state, {payload}) => {
            let newState = [...state];
            newState.push(payload);
            return newState;
        },
        deleteProduct: (state, action) => {

        }
    }
});


export const { addProduct, deleteProduct } = storeSlice.actions;
export default storeSlice.reducer;
