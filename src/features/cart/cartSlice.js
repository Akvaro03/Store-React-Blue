import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const storeSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct: (state, {payload}) => {
            let newState = [...state];
            let found = state[0] ? newState.findIndex(product => payload.name === product.name) : "none"
            if(found >= 0){
                // let count = {...newState[found].count}
                newState[found] = {...newState[found], count:newState[found].count + 1}
            } else{
                newState.push(payload);
            }         

            console.log(newState)
            return newState;
        },
        deleteProduct: (state, action) => {

        }
    }
});


export const { addProduct, deleteProduct } = storeSlice.actions;
export default storeSlice.reducer;
