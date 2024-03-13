import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Cart.css"
import { removeFromCart } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Cart = ({ obj }) => {
    const dispatch = useDispatch();

    const handleRemove = async () => {
        try {
            await removeFromCart(obj._id, dispatch);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="cart__product">
            <div className="cart__product-detail">
                <img
                    src={obj.product.img}
                    className="cart__image"
                />
                <div className="cart__details">
                    <span className="cart__product-name">
                        <b>Product:</b> {obj.product.title}
                    </span>
                    <span className="cart__product-id">
                        <b>ID:</b> {obj.product.productId}
                    </span>
                    <div style={{ display: "flex", flexDirection: "row" }}> <b>Color:</b>
                        <div className="cart__product-color"
                            style={{ backgroundColor: `${obj.product.color}`, marginLeft: "3px" }}>
                        </div>
                    </div>
                    <span className="cart__product-size">
                        <b>Size : </b>{obj.product.size}
                    </span>
                </div>
            </div>
            <div className="cart__price-detail">
                <div className="cart__product-amount-container">
                    <AddIcon />
                    <div className="cart__product-amount">{obj.product.quantity}</div>
                    <RemoveIcon />
                </div>
                <div className="cart__product-price">
                    ₹{obj.product.price * obj.product.quantity}
                </div>
                <div>
                    <div className="cart__product-remove" onClick={() => handleRemove()}>Remove</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;