import axios from "axios";

const productsApi = {
    async fetchProducts() {
        const res = await axios.get("https://dummyjson.com/products");
        return res?.data?.products;
    },

    async fetchProductById(id) {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        return res?.data?.products;
    }
}

export default productsApi;