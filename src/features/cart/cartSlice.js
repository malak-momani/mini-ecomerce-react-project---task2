import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../../localStorage/helpers";

const initialState = loadCartFromLocalStorage();
const findItemIndex = (items, productId) => items.findIndex(i => i.productId === productId);


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
                const { productId, title, price, img, quantity = 1, description, brand } = action.payload;
                const index = findItemIndex(state.items, productId);
                if (index >= 0) {
                    state.items[index].quantity += quantity;
                }
                else {
                    state.items?.push({ productId, title, price, img, quantity, description, brand });
                }

                state.lastUpdated = Date.now();
                state.totalItems += quantity;

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
            state.totalItems = state.items.reduce((total, item) => total + item?.quantity, 0)
            saveCartToLocalStorage(state)
        },
        increseQuantity(state, action) {
            const pId = action.payload;
            const index = findItemIndex(state.items, pId)
            state.items[index].quantity += 1;
            state.lastUpdated = Date.now();
            state.totalItems = state.items.reduce((total, item) => total + item?.quantity, 0)
            saveCartToLocalStorage(state)

        },
        decreaseQuantity(state, action) {
            const pId = action.payload;
            const index = findItemIndex(state.items, pId);
            if (index >= 0) {
                state.items[index].quantity -= 1;
                if (state.items[index].quantity <= 0) {
                    state.items.splice(index, 1)
                }
                state.lastUpdated = Date.now();
                state.totalItems = state.items.reduce((total, item) => total + item?.quantity, 0)
            }
            saveCartToLocalStorage(state)

        },
        clearCart(state) {
            state.items = [];
            state.lastUpdated = Date.now();
            state.totalItems = 0;
            saveCartToLocalStorage(state)

        },
    }
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity, increseQuantity } = cartSlice.actions;

export default cartSlice.reducer;