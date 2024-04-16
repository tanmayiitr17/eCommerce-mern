import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { useNavigate } from "react-router-dom";
import Cart from '../components/Cart';

const KEY = import.meta.env.REACT_APP_STRIPE;

const CartPage = () => {

  const cart = useSelector((state) => state.cart?.carts[0]);
  console.log(cart)
  const quantity = useSelector((state) => state.cart?.carts[0]?.length);

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
    <div className="cart__wrapper">
      <h1 className="cart__title">YOUR BAG</h1>
      <div className="cart__top">
        <button
          className="cart__top-button"
          style={{ backgroundColor: "transparent" }}
          onClick={() => navigate("/")}
        >
          CONTINUE SHOPPING
        </button>
        <div className="cart__top-texts">
          <span className="cart__top-text">Shopping Bag({quantity})</span>
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
          {cart?.map((product) =>
          (
            <Cart product={product} key={product._id} />
          )
          )}
        </div>
        <hr className="cart__hr" />
        <div className="cart__summary">
          <h1 className="cart__summary-title">ORDER SUMMARY</h1>
          <div className="cart__summary-item">
            <span className="cart__summary-item-text">Subtotal</span>
            <span className="cart__summary-item-price">₹ {cart?.total} </span>
          </div>
          <div className="cart__summary-item">
            <span className="cart__summary-item-text">
              Estimated Shipping
            </span>
            <span className="cart__summary-item-price">₹ 5.90</span>
          </div>
          <div className="cart__summary-item">
            <span className="cart__summary-item-text">Shipping Discount</span>
            <span className="cart__summary-item-price">₹ -5.90</span>
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
              ₹{cart?.total}
            </span>
          </div>
          <StripeCheckout
            name="eKHARID Shop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is ₹`}
            amount={cart?.total}
            token={onToken}
            stripekey={KEY}
          >
            <button className="cart__button">CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
