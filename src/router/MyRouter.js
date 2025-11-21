import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchProducts } from "../features/products/productsSlice";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";

const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Home />} />
            <Route path="/cart" element={<Home />} />
            <Route path="/*s" element={<Home />} />
        </Routes>
    )
}

export default AppRouter;

