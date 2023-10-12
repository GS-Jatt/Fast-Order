import { createSlice } from "@reduxjs/toolkit";

const initial = {

    cart:[],
    order:[
      {
        date: {
          day: 10,
          month: 9
        },
        id: 1697111825240,
        oder: [
          {
            id: 1,
            name: 'Margherita',
            quantity: 1,
            unitPrice: 12,
            totalPrice: 12
          },
          {
            id: 2,
            name: 'Capricciosa',
            quantity: 1,
            unitPrice: 14,
            totalPrice: 14
          }
        ],
            status: 'Delivered'
      },
      {
        date: {
          day: 11,
          month: 9
        },
        id: 1697111948956,
        oder: [
          {
            id: 1,
            name: 'Margherita',
            quantity: 2,
            unitPrice: 12,
            totalPrice: 24
          },
          {
            id: 2,
            name: 'Capricciosa',
            quantity: 2,
            unitPrice: 14,
            totalPrice: 28
          }
        ],
          status: 'Delivered'
      },
      {
        date: {
          day: 12,
          month: 9
        },
        id: 1697111961251,
        oder: [
          {
            id: 9,
            name: 'Pepperoni',
            quantity: 1,
            unitPrice: 14,
            totalPrice: 14
          },
          {
            id: 10,
            name: 'Hawaiian',
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15
          },
          {
            id: 11,
            name: 'Spinach and Mushroom',
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15
          },
          {
            id: 12,
            name: 'Mediterranean',
            quantity: 1,
            unitPrice: 16,
            totalPrice: 16
          }
        ],
        status: 'Pending'
      }
    ],
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
            
            state.order.push({ date: action.payload, id: Date.now(), oder: state.cart, status:'Pending'});
            state.cart =[];
        }
    }
})

export const reducer =  cartSlice.reducer;

export const {addItem, addOder, deleteItem, incQuantity, decQuantity, clearCart} = cartSlice.actions