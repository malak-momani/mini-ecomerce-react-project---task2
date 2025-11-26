import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchProducts } from "../features/products/productsSlice";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    )
}

export default AppRouter;

