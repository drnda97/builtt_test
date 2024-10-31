import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import { loadStateFromLocalStorage, saveStateToLocalStorage } from "./storage";

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to store changes to save state to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage({
    cart: state.cart, // Only save the cart state
  });
});

export default store;
