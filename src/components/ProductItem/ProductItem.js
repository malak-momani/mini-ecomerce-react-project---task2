import { Button, Card, Row } from "react-bootstrap";
import cart from "../../assets/images/cart3.svg"

const ProductItem = ({ item }) => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={item?.thumbnail} className="w-50 mx-auto" />
            <Card.Body>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text style={{ height: 100 }}>
                    {item?.description}
                </Card.Text>
                <Row className="d-flex justify-content-between p-3">
                    <Button variant="primary" className="w-50 h-25">Details</Button>
                    <Button variant="primary" className="w-25 h-25">
                        <img src={cart} alt="cart" />
                    </Button>
                </Row>

            </Card.Body>
        </Card>
    )
}

export default ProductItem;