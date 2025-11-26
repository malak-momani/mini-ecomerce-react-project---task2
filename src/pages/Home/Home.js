import { Row } from "react-bootstrap"
import ProductsList from "../../components/ProductsList/ProductList";
import { useSelector } from "react-redux";
import "./Home.css"
import Header from '../../components/Header/Header';

const Home = () => {

    const { items } = useSelector(state => state.products);


    return (
        <>
            <Header />
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