import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../services/cart";
import { addOrder } from "../../services/order";

const initial = {
  cart: [],
  order: [
    //   {
    //     date: {
    //       day: 10,
    //       month: 9,
    //     },
    //     id: 1697111825240,
    //     oder: [
    //       {
    //         id: 1,
    //         name: "Margherita",
    //         quantity: 1,
    //         unitPrice: 12,
    //         totalPrice: 12,
    //       },
    //       {
    //         id: 2,
    //         name: "Capricciosa",
    //         quantity: 1,
    //         unitPrice: 14,
    //         totalPrice: 14,
    //       },
    //     ],
    //     status: "Delivered",
    //   },
    //   {
    //     date: {
    //       day: 11,
    //       month: 9,
    //     },
    //     id: 1697111948956,
    //     oder: [
    //       {
    //         id: 1,
    //         name: "Margherita",
    //         quantity: 2,
    //         unitPrice: 12,
    //         totalPrice: 24,
    //       },
    //       {
    //         id: 2,
    //         name: "Capricciosa",
    //         quantity: 2,
    //         unitPrice: 14,
    //         totalPrice: 28,
    //       },
    //     ],
    //     status: "Delivered",
    //   },
    //   {
    //     date: {
    //       day: 12,
    //       month: 9,
    //     },
    //     id: 1697111961251,
    //     oder: [
    //       {
    //         id: 9,
    //         name: "Pepperoni",
    //         quantity: 1,
    //         unitPrice: 14,
    //         totalPrice: 14,
    //       },
    //       {
    //         id: 10,
    //         name: "Hawaiian",
    //         quantity: 1,
    //         unitPrice: 15,
    //         totalPrice: 15,
    //       },
    //       {
    //         id: 11,
    //         name: "Spinach and Mushroom",
    //         quantity: 1,
    //         unitPrice: 15,
    //         totalPrice: 15,
    //       },
    //       {
    //         id: 12,
    //         name: "Mediterranean",
    //         quantity: 1,
    //         unitPrice: 16,
    //         totalPrice: 16,
    //       },
    //     ],
    //     status: "Pending",
    //   },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    addItem(state, action) {
      state.cart.push(action.payload);
      updateCart(state.cart);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      updateCart(state.cart);
    },
    incQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      updateCart(state.cart);
    },
    decQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      updateCart(state.cart);
    },
    clearCart(state, action) {
      state.cart = [];
      updateCart(state.cart);
    },
    addOder(state, action) {
      state.order.push({
        date: action.payload,
        orderId: Date.now(),
        oder: state.cart,
        status: "Pending",
      });
      addOrder({
        date: action.payload,
        id: 23,
        orderId: Date.now(),
        oder: state.cart,
        status: "Pending",
      });
      state.cart = [];
      updateCart(state.cart);
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const reducer = cartSlice.reducer;

export const {
  addItem,
  addOder,
  deleteItem,
  incQuantity,
  decQuantity,
  clearCart,
  setCart,
  setOrder,
} = cartSlice.actions;
