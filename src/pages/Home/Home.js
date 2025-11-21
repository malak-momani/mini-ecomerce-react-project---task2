import { Row } from "react-bootstrap"
import ProductsList from "../../components/ProductsList/ProductList";
import { useSelector } from "react-redux";
import "./Home.css"

const Home = () => {

    const { items, status, error } = useSelector(state => state.products);
    console.log({ items })


    if (status === 'loading') return <div>Loading products...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    return (
        <>
            <Row className="p-5">
                <h2 className="our-products">Our Products</h2>
            </Row>
            <Row id="products-section">
                <ProductsList products={items} />
            </Row>
        </>
    )
}

export default Home;