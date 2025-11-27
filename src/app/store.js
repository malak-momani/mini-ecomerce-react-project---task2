import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import { loadCartFromLocalStorage } from "../localStorage/helpers";

const preloadedState = {
    cart: loadCartFromLocalStorage() || undefined,
};

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
    preloadedState,
});

export default store;