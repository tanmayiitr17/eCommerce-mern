import React, { useEffect, useState } from "react";
import "./Cart.css";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { useNavigate } from "react-router-dom";


const KEY = import.meta.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart?.carts[0])
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart?.total * 100,
        });
        navigate('/success', {
          data: res.data,
        });
      } catch (err) {

      }
    }
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="cart__container">
      <div className="cart__wrapper">
        <h1 className="cart__title">YOUR BAG</h1>
        <div className="cart__top">
          <button
            className="cart__top-button"
            style={{ backgroundColor: "transparent" }}
          >
            CONTINUE SHOPPING
          </button>
          <div className="cart__top-texts">
            <span className="cart__top-text">Shopping Bag(2)</span>
            <span className="cart__top-text">Your Wishlist (0)</span>
          </div>
          <button
            className="cart__top-button"
            style={{ border: "none", backgroundColor: "black", color: "white" }}
          >
            CHECKOUT NOW
          </button>
        </div>
        <div className="cart__bottom">
          <div className="cart__info">
            {cart && cart?.map((obj) =>
            (
              <div className="cart__product" key={obj._id}>
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
                    <div
                      className="cart__product-color"
                      style={{ backgroundColor: `${obj.product.color}` }}
                    ></div>
                    <span className="cart__product-size">
                      <b>Size : </b>{obj.product.size}
                    </span>
                  </div>
                </div>
                <div className="cart__price-detail">
                  <div className="cart__product-amount-container">
                    <Add />
                    <div className="cart__product-amount">{obj.product.quantity}</div>
                    <Remove />
                  </div>
                  <div className="cart__product-price">
                    $ {obj.product.price * obj.product.quantity}
                  </div>
                </div>
              </div>
            )
            )}
          </div>
          <hr className="cart__hr" />
          <div className="cart__summary">
            <h1 className="cart__summary-title">ORDER SUMMARY</h1>
            <div className="cart__summary-item">
              <span className="cart__summary-item-text">Subtotal</span>
              <span className="cart__summary-item-price">$ {cart?.total} </span>
            </div>
            <div className="cart__summary-item">
              <span className="cart__summary-item-text">
                Estimated Shipping
              </span>
              <span className="cart__summary-item-price">$ 5.90</span>
            </div>
            <div className="cart__summary-item">
              <span className="cart__summary-item-text">Shipping Discount</span>
              <span className="cart__summary-item-price">$ -5.90</span>
            </div>
            <div className="cart__summary-item">
              <span
                className="cart__summary-item-text"
                style={{ fontWeight: "500", fontSize: "24px" }}
              >
                Total
              </span>
              <span
                className="cart__summary-item-price"
                style={{ fontWeight: "500", fontSize: "24px" }}
              >
                ${cart?.total}
              </span>
            </div>
            <StripeCheckout
              name="eKHARID Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $`}
              amount={cart?.total}
              token={onToken}
              stripekey={KEY}
            >
              <button className="cart__button">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
