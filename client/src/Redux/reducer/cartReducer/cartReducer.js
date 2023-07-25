import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    cart: [],
    error: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // let existItem = state.cart.findIndex((item) => item.id === action.payload.id)
            // if(existItem >= 0) {
            //     state.cart[existItem].quantity += 1;
            // }
            // else {
            //     state.cart.push(action.payload)
            // }  
            let existItem = state.cart.find((element) => element.id === action.payload.id)
            if (existItem) {
                existItem.quantity += 1;
            }
            else {
                state.cart.push(action.payload)
            }
        },
        addItemQuantity: (state, action) => {
            let findItem = state.cart.find((element) => element.id === action.payload);
            findItem.quantity += 1;
        },
        subItemQuantity: (state, action) => {
            let findItem = state.cart.find((element) => element.id === action.payload);
            findItem.quantity -= 1;
        },
        removeItemCart: (state, action) => {
            let findItem = state.cart.findIndex((item) => item.id === action.payload);
            if(findItem >= 0)
            {
                state.cart.splice(findItem, 1)
            }
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, addItemQuantity, subItemQuantity, removeItemCart } = cartSlice.actions;