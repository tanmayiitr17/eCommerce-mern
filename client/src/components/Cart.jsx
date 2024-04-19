// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.css"
import { useSelector } from "react-redux";
import { removeFromCart } from '../api/cart';

const Cart = ({ product }) => {
    const userId = useSelector((state) => state?.user?.currentUser?._id);
    const id = {
        userId: userId,
        id: product?._id,
    }

    const handleRemove = async () => {
        try {
            const res = await removeFromCart(id);
            if (res) {
                window.location.reload();
            }
        } catch (err) {
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
                    <div style={{ display: "flex", flexDirection: "row" }}> <b>Color:</b>
                        <div className="cart__product-color"
                            style={{ backgroundColor: `${product.color}`, marginLeft: "3px" }}>
                        </div>
                    </div>
                    <span className="cart__product-size">
                        <b>Size : </b>{product?.size}
                    </span>
                    <span className="cart__product-id">
                        <b>Price:</b>  ₹{product?.price * product?.quantity}
                    </span>
                </div>
            </div>
            <DeleteIcon className="cart__product-remove" onClick={() => handleRemove()} />
        </div>
    )
}

export default Cart;