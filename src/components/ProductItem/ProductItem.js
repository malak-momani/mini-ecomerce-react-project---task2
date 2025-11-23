import { Button, Card, Col, Row } from "react-bootstrap";
import cart from "../../assets/images/cart3.svg"
import { useDispatch } from "react-redux";


const ProductItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleAdd = (product) => {

    }
    return (
        <Card style={{ width: '20rem', height: '20rem' }}>
            <Card.Img variant="top" src={item?.thumbnail} className="w-50 mx-auto" />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fs-6">{item?.title}</Card.Title>
                <Row>
                    <Col>
                        <Card.Text style={{ color: "gray" }}>
                            {item?.brand}
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text style={{ color: "gray" }}>
                            {`Details >`}
                        </Card.Text>
                    </Col>
                </Row>



                {/* <Button variant="primary" className="w-50">Details</Button> */}
                <Card.Text className="d-flex justify-content-between">
                    {`${item?.price}$`}
                    <Button variant="primary" className="w-25 cart" >
                        <img src={cart} alt="cart" />
                    </Button>
                </Card.Text>
                <Row className="d-flex justify-content-between px-2">

                </Row>

            </Card.Body>
        </Card >
    )
}

export default ProductItem;