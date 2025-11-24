import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    try {
        const cart = localStorage.getItem('cart');
        return JSON.parse(cart);
    } catch (error) {
        console.log('Could Not read from Local Storage', error);
        return { items: [], lastUpdated: null }
    }
}

const initialState = loadCartFromLocalStorage();

const finditemIndex = (items, productId) => items?.findIndex(i => i.productId === productId)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
                const { productId, name, price, img, quantity = 1 } = action.payload;
                const index = finditemIndex(state.items, productId);
                if (index >= 0) {
                    state.items[index].quantity += quantity;
                } else {
                    state.items?.push({ productId, name, price, img, quantity });
                }

                state.lastUpdated = Date.now();
            },
            prepare(payload) {
                return { payload };
            }
        },
        removeFromCart(state, action) {
            const pId = action.payload;
            state.items = state.items?.filter(i => {
                return i.productId !== pId
            });
            state.lastUpdated = Date.now();
        },
        clearCart(state) {
            state.items = [];
            state.lastUpdated = Date.now();
        },
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;