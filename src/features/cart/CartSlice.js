import { createSlice } from "@reduxjs/toolkit";

const initial = {

    cart:[],
    order:[],
};

const cartSlice = createSlice({
    name:'cart',
    initialState: initial,
    reducers:{
        addItem(state, action){
            state.cart.push(action.payload);
        },
        deleteItem(state, action){
            state.cart = state.cart.filter((item)=>item.id!==action.payload);
        },
        incQuantity(state, action){
            
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity ++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decQuantity(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity --;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state, action){
            state.cart = [];
        },
        addOder(state, action){
            
            state.order.push({ date: action.payload,id:Date.now(), oder: state.cart});
            state.cart =[];
        }
    }
})

export const reducer =  cartSlice.reducer;

export const {addItem, addOder, deleteItem, incQuantity, decQuantity, clearCart} = cartSlice.actions