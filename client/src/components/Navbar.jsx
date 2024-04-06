import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../redux/userSlice';
import { getUserCart } from "../redux/apiCalls";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart?.carts[0]?.length);
  const user = useSelector((state) => state.user.currentUser?.username);
  const userId = useSelector((state) => state?.user?.currentUser?._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    getUserCart(userId, dispatch);
  }, [])



  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  }

  const handleClick = () => {
    navigate("/cart");
    window.location.reload();
  }

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__left">
          <span className="nav__language">EN</span>
          <div className="nav__search-container">
            <input className="nav__input" placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="nav__center">
          <h1 className="nav__logo">eKHARID.</h1>
        </div>
        <div className="nav__right ">
          <div className="nav__menu-item">{user}</div>
          <div className="nav__logout" onClick={handleLogout} >LOGOUT</div>
          <div className="nav__menu-item">
            <Badge
              badgeContent={quantity}
              color="primary"
              onClick={handleClick}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
