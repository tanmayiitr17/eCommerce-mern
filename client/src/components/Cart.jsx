// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import "./Cart.css"
import { removeFromCart } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { showError, showMessage } from "../utils/notify";

const Cart = ({ product }) => {
    const userId = useSelector((state) => state?.user?.currentUser?._id);
    const id = {
        userId: userId,
        id: product?._id,
    }
    const dispatch = useDispatch();

    const handleRemove = async () => {
        try {
            const res = await removeFromCart(id, dispatch);
            // if (res) {
            //     showMessage("Removed from cart!");
            window.location.reload();
            // }

        } catch (err) {
            // console.log(err);
            // showError("Something went wrong.Try again!")
        }
    }

    return (
        <div className="cart__product">
            <div className="cart__product-detail">
                <img
                    src={product?.img}
                    className="cart__image"
                />
                <div className="cart__details">
                    <span className="cart__product-name">
                        <b>Product:</b> {product?.title}
                    </span>
                    <span className="cart__product-id">
                        <b>ID:</b> {product?.productId}
                    </span>
                    <div style={{ display: "flex", flexDirection: "row" }}> <b>Color:</b>
                        <div className="cart__product-color"
                            style={{ backgroundColor: `${product.color}`, marginLeft: "3px" }}>
                        </div>
                    </div>
                    <span className="cart__product-size">
                        <b>Size : </b>{product?.size}
                    </span>
                </div>
            </div>
            <div className="cart__price-detail">
                {/* <div className="cart__product-amount-container">
                    <AddIcon />
                    <div className="cart__product-amount">{product?.quantity}</div>
                    <RemoveIcon />
                </div> */}
                <div className="cart__product-price">
                    ₹{product?.price * product?.quantity}
                </div>
                <div>
                    <div className="cart__product-remove" onClick={() => handleRemove()}>Remove</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;