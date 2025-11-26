import { useSelector } from "react-redux"
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
    const { items } = useSelector(state => state.cart)
    return (
        <>
            {items ? (
                items?.map((item, key) =>
                    <CartItem item={item} key={key} />
                )
            ) :
                (<div>No Items on you cart</div>)
            }

        </>
    )
}

export default Cart;