import React from "react";
import "./Product.css";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="product__container">
      <div className="product__circle"></div>
      <img src={item.img} className="product__image" />
      <div className="product__info">
        <div className="product__icon">
          <Search onClick={() => navigate(`/product/${item._id}`)} />
        </div>
        {/* <div className="product__icon">
          <FavoriteBorderOutlined />
        </div> */}
        <div className="product__icon">₹ {item?.price}</div>
      </div>
    </div>
  );
};

export default Product;
