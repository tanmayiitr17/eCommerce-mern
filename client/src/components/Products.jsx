import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";
import Loading from "../utils/Loading";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecommerce-server-black.vercel.app/products?category=${cat}`
            : "https://ecommerce-server-black.vercel.app/products"
        );
        if (res) {
          setLoading(false);
          setProducts(res.data);
        }
      } catch (err) {

      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div className="products__container">
      {loading && <Loading />}
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)
      }
    </div>
  );
};

export default Products;
