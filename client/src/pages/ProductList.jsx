import "./ProductList.css";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <div className="productList__container">
      <h1 className="productList__title">{cat}</h1>
      <div className="productList__filter-container">
        <div className="productList__filter">
          <span className="productList__filter-text">Filter Products:</span>
          <select name="color" onChange={handleFilters} className="productList__select">
            <option disabled className="productList__option">
              Color
            </option>
            <option value="white" className="productList__option">
              White
            </option>
            <option value="black" className="productList__option">
              Black
            </option>
            <option value="red" className="productList__option">
              Red
            </option>
            <option value="blue" className="productList__option">
              Blue
            </option>
            <option value="yellow" className="productList__option">
              Yellow
            </option>
            <option value="green" className="productList__option">
              Green
            </option>
          </select>
          <select name="size" onChange={handleFilters} className="productList__select">
            <option disabled className="productList__option">
              Size
            </option>
            <option value="XS" className="productList__option">
              XS
            </option>
            <option value="S" className="productList__option">
              S
            </option>
            <option value="M" className="productList__option">
              M
            </option>
            <option value="L" className="productList__option">
              L
            </option>
            <option value="XL" className="productList__option">
              XL
            </option>
          </select>
        </div>
        <div className="productList__filter">
          <span className="productList__filter-text">Sort Products:</span>
          <select onChange={(e) => setSort(e.target.value)} className="productList__select">
            <option value="newest" className="productList__option">
              Newest
            </option>
            <option value="asc" className="productList__option">
              Price (asc)
            </option>
            <option value="desc" className="productList__option">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
