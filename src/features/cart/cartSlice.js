import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const storeSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            let newState = [...state];
            let found = state[0] ? newState.findIndex(product => payload.name === product.name) : "none"
            if (found >= 0) {
                newState[found] = { ...newState[found], count: Number(newState[found].count) + Number(payload.count) }
            } else {
                newState.push(payload);
            }
            return newState;
        },
        deleteProduct: (state, { payload }) => {
            console.log("first")
            let newState = [...state];
            let productFound = state[0] && newState.findIndex(product => payload.name === product.name)
            if (productFound >= 0) {
                newState[productFound].count > 1
                    ?
                    newState[productFound] = {...newState[productFound], count: newState[productFound].count - 1}
                    :
                    newState.splice(productFound, 1)
            }

            return newState;
        }
    }
});


export const { addProduct, deleteProduct } = storeSlice.actions;
export default storeSlice.reducer;
