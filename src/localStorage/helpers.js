const saveCartToLocalStorage = (cartState) => {
    try {
        const toSave = cartState ? JSON.stringify(cartState) : { items: [], lastUpdated: null, totalItems: 0 };
        localStorage.setItem('cart', toSave)
    } catch (error) {
        console.log('Could not save cart', error)

    }
}

const loadCartFromLocalStorage = () => {
    try {
        const cart = localStorage.getItem('cart');
        return JSON.parse(cart);
    } catch (error) {
        console.log('Could Not read from Local Storage', error);
        return { items: [], lastUpdated: null, totalItems: 0 }
    }
}


export { loadCartFromLocalStorage, saveCartToLocalStorage }