import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = ({ products }) => {
    console.log({ products })

    return (
        <Container className="px-5">
            <Row className="g-4">
                {products?.map((product, idx) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                        <ProductItem item={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductsList;