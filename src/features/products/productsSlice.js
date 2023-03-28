import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     {
//         imgProduct: imgBackpack,
//         name: "Mochila Kuromi",
//         Description: "This is a Kuromi backspack",
//         Price: 250,
//     },
//     {
//         imgProduct: imgDoll,
//         name: "Muñeco Kuromi",
//         Price: 150,
//         Description: "This is a doll"
//     },
//     {
//         imgProduct: imgBackpack,
//         name: "Mochila Kuromi",
//         Description: "This is a Kuromi backspack",
//         Price: 250,
//     },
//     {
//         imgProduct: imgDoll,
//         name: "Muñeco Kuromi",
//         Price: 150,
//         Description: "This is a doll"
//     },
//     {
//         imgProduct: imgBackpack,
//         name: "Mochila Kuromi",
//         Description: "This is a Kuromi backspack",
//         Price: 250,
//     },
//     {
//         imgProduct: imgDoll,
//         name: "Muñeco Kuromi",
//         Price: 150,
//         Description: "This is a doll"
//     },
//     {
//         imgProduct: imgBackpack,
//         name: "Mochila Kuromi",
//         Description: "This is a Kuromi backspack",
//         Price: 250,
//     },
//     {
//         imgProduct: imgDoll,
//         name: "Muñeco Kuromi",
//         Price: 150,
//         Description: "This is a doll"
//     },

// ]
const initialState = []
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state, {payload}) => {
            let newState = [...state];
            newState.push(payload);
            return newState;
        },
        editProduct: (state, action) => {

        },
        deleteProduct: (state, action) => {

        }
    }
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;

