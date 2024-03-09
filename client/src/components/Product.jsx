import React from "react";
import "./Product.css";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="product__container">
      <div className="product__circle"></div>
      <img src={item.img} className="product__image" />
      <div className="product__info">
        <div className="product__icon">
          <ShoppingCartOutlined />
        </div>
        <div className="product__icon">
          <Link to={`/product/${item._id}`}>
            <Search />
          </Link>
        </div>
        <div className="product__icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
