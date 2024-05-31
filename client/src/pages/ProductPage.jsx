import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import "./ProductPage.css";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { addToCart } from "../api/cart";
import { showError, showMessage } from "../utils/notify";
import Loading from "../utils/Loading";

const productPage = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state?.user?.currentUser?._id);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        if (res) {
          setProduct(res.data);
          setColor(res.data?.color[0]);
          setSize(res.data?.size[0]);
          setLoading(false);
        }

      } catch (err) {

      } finally {
        setLoading(false);
      }
    };
    getproduct();
  }, [productId]);



  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity((quantity) => quantity - 1);
    } else {
      setQuantity((quantity) => quantity + 1);
    }
  }

  const title = product?.title;
  const img = product?.img;
  const price = product?.price;
  const id = productId;
  const handleClick = async () => {
    const product = { id, quantity, color, size, title, img, price };
    const data = { userId, product };
    console.log(data)
    try {
      const res = await addToCart(data);
      if (res) {
        showMessage("Added to cart!")
      }
    } catch (err) {
      console.log(err)
      showError("Something went wrong.Try Again!");
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  return (
    <div className="productPage__container">
      {loading && <Loading />}
      <div className="productPage__wrapper">
        <div className="productPage__img-container">
          <img
            src={product?.img}
            className="productPage__image"
          />
        </div>
        <div className="productPage__info-container">
          <h1 className="productPage__title">{product?.title}</h1>
          <p className="productPage__desc">
            {product?.desc}
          </p>
          <span className="productPage__price">₹ {product?.price}</span>
          <div className="productPage__filter-container">
            <div className="productPage__filter">
              <span className="productPage__filter-title">Color</span>
              {product?.color?.map((c) => {
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
                {product?.size?.map((size) => {
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
              onClick={handleClick}
            >ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPage;
