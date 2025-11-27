import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import trash from '../../assets/images/trash3.svg'
import shop from '../../assets/images/shop.svg'
import './CartItem.css'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increseQuantity, removeFromCart } from '../../features/cart/cartSlice';

function CartItem({ item }) {

    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decreaseQuantity(item?.productId))
    }

    const handleIncrease = () => {
        dispatch(increseQuantity(item?.productId))
    }

    const handleDelete = () => {
        dispatch(removeFromCart(item.productId))
    }
    return (
        <Card className='p-2 cart-item'>
            <Row className='d-flex flex-row'>
                <Card.Header>
                    <img src={shop} className='shop' alt='shop' />
                    {item?.brand}
                </Card.Header>
            </Row>
            <Row className='align-items-center'>
                <Col className='col-2 cart-img'>
                    <Card.Img
                        src={item.img}
                        className='border border-gray'
                    />
                </Col>
                <Col className='col-7'>
                    <Card.Body>
                        <Card.Title>{item?.title}</Card.Title>
                        <Card.Text>
                            {item.description?.slice(0, 40)}...
                        </Card.Text>
                        <Card.Text className="mb-2 fs-3">${item.price}</Card.Text>
                    </Card.Body>
                </Col>
                <Col className='col-3'>
                    <div className="d-flex align-items-center gap-2">
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleDecrease(item.id)}
                        >
                            -
                        </Button>

                        <span className="fw-bold">{item.quantity}</span>

                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleIncrease(item.id)}
                        >
                            +
                        </Button>
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                        >
                            <img src={trash} alt='trash' />
                        </Button>
                    </div>

                </Col>
            </Row>

        </Card>
    );
}

export default CartItem;