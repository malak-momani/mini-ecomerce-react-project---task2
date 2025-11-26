import { useEffect, useState } from "react";
import { Badge, Button, Card, Carousel, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchProductById } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { saveCartToLocalStorage } from "../../localStorage/helpers";
import cartIcon from '../../assets/images/cart3.svg';
import "./ProductDetails.css"

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { currentProduct } = useSelector(state => state.products);
    const cart = useSelector(state => state.cart)

    const discountedPrice = currentProduct?.discountPercentage
        ? (currentProduct?.price * (1 - currentProduct?.discountPercentage / 100)).toFixed(2)
        : null

    const handleIncrease = () => setQuantity((q) => q + 1);
    const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
    const handleAdd = () => {
        dispatch(addToCart({
            productId: currentProduct?.id,
            title: currentProduct?.title,
            brand: currentProduct?.brand,
            price: currentProduct?.price,
            img: currentProduct?.thumbnail,
            description: currentProduct?.description,
            discount: currentProduct?.discountPercentage,
            quantity: quantity,
        }))
    }
    useEffect(() => {
        dispatch(fetchProductById(id));
        setQuantity(1)
    }, []);

    useEffect(() => {
        saveCartToLocalStorage(cart);
    }, [cart]);


    return (
        <Container className="product-details">
            <Row>
                <Col xs={12} md={6} className="mb-3">
                    <Card>
                        <Card.Body className="p-0">
                            <Carousel variant="dark" className="pd-carousel">
                                {(currentProduct?.images && currentProduct?.images.length > 0 ? currentProduct?.images : [currentProduct?.thumbnail]).map((imgSrc, idx) => (
                                    <Carousel.Item key={idx}>
                                        <Image src={imgSrc} alt={`${currentProduct?.title} ${idx + 1}`} fluid className="pd-image" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="h-100 pd-details-card" >
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <Card.Title className="pd-title">{currentProduct?.title}</Card.Title>
                                    <Card.Subtitle className="text-muted pd-brand">{currentProduct?.title}</Card.Subtitle>
                                </div>

                                <div className="text-end pd-price-block">
                                    {discountedPrice ? (
                                        <>
                                            <div className="pd-price-discounted">${discountedPrice}</div>
                                            <div className="pd-price-original text-muted">${currentProduct?.price.toFixed(2)}</div>
                                            <Badge bg="success" className="pd-discount-badge">
                                                {currentProduct?.discountPercentage}% off
                                            </Badge>
                                        </>
                                    ) : (
                                        <div className="pd-price">${currentProduct?.price.toFixed(2)}</div>
                                    )}
                                </div>
                            </div>

                            <ListGroup variant="flush" className="mt-3">
                                <ListGroup.Item className="pd-description">{currentProduct?.description}</ListGroup.Item>

                                <ListGroup.Item>
                                    <Row className="align-items-center">
                                        <Col xs={6}>
                                            <div className="pd-rating">
                                                <strong>{currentProduct?.rating ?? "—"}</strong>
                                                <span className="text-muted ms-2">({currentProduct?.reviews?.length ?? 0} reviews)</span>
                                            </div>
                                        </Col>
                                        <Col xs={6} className="text-end">
                                            <small className="text-muted">Ships: {currentProduct?.shippingInformation ?? "Standard"}</small>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {currentProduct?.returnPolicy && (
                                    <ListGroup.Item>
                                        <strong>Return policy: </strong>
                                        <span className="text-muted">{currentProduct?.returnPolicy}</span>
                                    </ListGroup.Item>
                                )}
                            </ListGroup>

                            <div className="pd-actions mt-3">
                                <Row className="g-2 align-items-center">
                                    <Col xs={12} sm={6} className="d-flex align-items-center">
                                        <Button variant="outline-secondary" size="sm" onClick={handleDecrease} className="me-2 pd-qty-btn">−</Button>
                                        <div className="pd-qty-display">{quantity}</div>
                                        <Button variant="outline-secondary" size="sm" onClick={handleIncrease} className="ms-2 pd-qty-btn">+</Button>
                                    </Col>

                                    <Col xs={12} sm={6} className="d-flex justify-content-sm-end mt-2 mt-sm-0">
                                        <Button variant="outline-secondary" className="w-50 cart" onClick={handleAdd} >
                                            Add to cart
                                            <img src={cartIcon} alt="cart" style={{ margin: 5 }} />
                                        </Button>
                                        {/* <Button variant="outline-primary" className="pd-buy-btn">Buy Now</Button> */}
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default ProductDetails;