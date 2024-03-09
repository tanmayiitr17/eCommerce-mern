import React from "react";
import "./CategoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem__container">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" className="categoryItem__image" />
        <div className="categoryItem__info">
          <h1 className="categoryItem__title">{item.title}</h1>
          <button className="categoryItem__button">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
