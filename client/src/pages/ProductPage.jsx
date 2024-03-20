import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import "./ProductPage.css";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/apiCalls";

const productPage = () => {

  const userId = useSelector((state) => state.user.currentUser._id);
  const location = useLocation();
  const pdtId = location.pathname.split("/")[2];
  const [pdt, setpdt] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState("M");

  const dispatch = useDispatch();

  useEffect(() => {
    const getpdt = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${pdtId}`);
        setpdt(res.data);
      } catch (err) { }
    };
    getpdt();
  }, [pdtId]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity((quantity) => quantity - 1);
    } else {
      setQuantity((quantity) => quantity + 1);
    }
  }

  const handleClick = async (pdt) => {
    const title = pdt.title;
    const img = pdt.img;
    const price = pdt.price;
    const productId = pdtId;

    const product = { productId, quantity, color, size, title, img, price };
    const data = { userId, product };

    try {
      await addToCart(data, dispatch);
      window.location.reload();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="productPage__container">
      <div className="productPage__wrapper">
        <div className="productPage__img-container">
          <img
            src={pdt.img}
            className="productPage__image"
          />
        </div>
        <div className="productPage__info-container">
          <h1 className="productPage__title">{pdt.title}</h1>
          <p className="productPage__desc">
            {pdt.desc}
          </p>
          <span className="productPage__price">₹ {pdt.price}</span>
          <div className="productPage__filter-container">
            <div className="productPage__filter">
              <span className="productPage__filter-title">Color</span>
              {pdt?.color?.map((c) => {
                return (<div
                  className="productPage__filter-color"
                  style={{ backgroundColor: `${c}` }}
                  key={c}
                  onClick={() => { setColor(c) }}
                ></div>)
              })}
            </div>
            <div className="productPage__filter">
              <span className="productPage__filter-title">Size</span>
              <select onChange={(e) => { setSize(e.target.value) }} className="productPage__filter-size">
                {pdt?.size?.map((size) => {
                  return (<option value={size} key={size} className="productPage__filter-size-option">
                    {size}
                  </option>)
                })}
              </select>
            </div>
          </div>
          <div className="productPage__add-container">
            <div className="productPage__amount-container">
              <RemoveIcon onClick={() => { handleQuantity("decrease") }} />
              <span className="productPage__amount">{quantity}</span>
              <AddIcon onClick={() => { handleQuantity("increase") }} />
            </div>
            <button className="productPage__button"
              onClick={(pdt) => handleClick(pdt)}
            >ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPage;
