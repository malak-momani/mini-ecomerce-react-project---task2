const saveCartToLocalStorage = (cartState) => {
    try {
        const toSave = cartState ? cartState : { items: [], lastUpdated: null, totalItems: 0 };
        localStorage.setItem('cart', JSON.stringify(toSave))
    } catch (error) {
        console.log('Could not save cart', error)

    }
}

const loadCartFromLocalStorage = () => {
    try {
        const data = localStorage.getItem("cart");
        if (!data) return undefined;

        const parsed = JSON.parse(data);
        if (
            typeof parsed === "object" &&
            parsed !== null &&
            Array.isArray(parsed.items)
        ) {
            return parsed;
        }

        return undefined;
    } catch {
        return undefined;
    }

}


export { loadCartFromLocalStorage, saveCartToLocalStorage }