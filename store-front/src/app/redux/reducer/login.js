import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: {},
  login: false,
  cart: [],
  wishlist: [],
  orders: [],
  shippingAddress: {},
  paymentMethod: null,
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    // 🧩 Authentication
    authToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user || {};
      state.login = true;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user = {};
      state.login = false;
      state.cart = [];
      state.wishlist = [];
      state.orders = [];
      state.shippingAddress = {};
      state.paymentMethod = null;
    },

    // 🛒 Cart Management
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.cart.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },

    // 💖 Wishlist
    addToWishlist: (state, action) => {
      const item = action.payload;
      if (!state.wishlist.find((i) => i.id === item.id)) {
        state.wishlist.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((i) => i.id !== action.payload);
    },

    // 📦 Orders
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    // 🚚 Shipping & Payment
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    // 🧼 Reset
    reset: (state) => {
      state.token = null;
      state.user = {};
      state.login = false;
      state.cart = [];
      state.wishlist = [];
      state.orders = [];
      state.shippingAddress = {};
      state.paymentMethod = null;
    },
  },
});

export const {
  authToken,
  logoutUser,
  addToCart,
  removeFromCart,
  clearCart,
  addToWishlist,
  removeFromWishlist,
  addOrder,
  setShippingAddress,
  setPaymentMethod,
  reset,
} = login.actions;

export default login.reducer;
