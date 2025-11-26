import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { saveCartToLocalStorage } from "../../localStorage/helpers";
import cartIcon from '../../assets/images/cart3.svg'
import { useEffect } from "react";

const ProductItem = ({ item }) => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart({
            productId: item?.id,
            title: item?.title,
            brand: item?.brand,
            price: item?.price,
            img: item?.thumbnail,
            description: item?.description,
            discount: item?.discountPercentage,
            quantity: 1,
        }))
    }

    useEffect(() => {
        saveCartToLocalStorage(cart);
    }, [cart]);

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
                        <Card.Link style={{ color: "gray", cursor: 'pointer' }} href={`/product/${item.id}`}>
                            {`Details >`}
                        </Card.Link>
                    </Col>
                </Row>

                {/* <Button variant="primary" className="w-50">Details</Button> */}
                <Card.Text className="d-flex justify-content-between">
                    {`${item?.price}$`}
                    <Button variant="outline-secondary" className="w-50 cart" onClick={handleAdd} >
                        Add to cart
                        <img src={cartIcon} alt="cart" style={{ margin: 5 }} />
                    </Button>
                </Card.Text>


            </Card.Body>
        </Card >
    )
}

export default ProductItem;