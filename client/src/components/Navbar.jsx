import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from "react-redux";
import { logout } from '../redux/userSlice';
import { getUserCart } from "../redux/apiCalls";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart?.carts)
  const quantity = useSelector((state) => state.cart?.carts[0]?.length);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.user?.currentUser?._id);
  useEffect(() => {
    getUserCart(userId, dispatch);
    setProducts(cart);
  }, [])


  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  }

  const handleClick = (e) => {
    navigate("/cart");
    window.location.reload();
  }

  const user = useSelector((state) => state.user.currentUser?.username);

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
        <div className="nav__right">
          <div className="nav__menu-item">{user}</div>
          <ExitToAppIcon className='nav__menu-item-logout' onClick={handleLogout} />
          <Link to='/cart'>
            <div className="nav__menu-item">
              <Badge
                badgeContent={quantity}
                color="primary"
                onClick={handleClick}
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
