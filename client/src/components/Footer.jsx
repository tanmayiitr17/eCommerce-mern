import React from "react";
import "./Footer.css";
import Facebook from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__left">
        <h1 className="footer__logo">eKHARID.</h1>
        <p className="footer__desc">
          eKharid, a dummy full-stack eCommerce site by <b>Tanmay Pandey</b>, showcases modern web development with MongoDB, Express.js, React.js, Node.js, and Redux Toolkit. Redux Toolkit streamlines state management in React applications, enhancing eKharid's efficiency and scalability while providing a seamless shopping experience for users.
        </p>
        <div className="footer__social-container">
          <a
            className="footer__social-icon"
            style={{ backgroundColor: "#385999" }}
            href="https://www.linkedin.com/in/tanmay-pandey-03281b232/"
          >
            <Facebook />
          </a>
          <a
            className="footer__social-icon"
            style={{ backgroundColor: "#E4405F" }}
            href="https://www.linkedin.com/in/tanmay-pandey-03281b232/"
          >
            <InstagramIcon />
          </a>
          <a
            className="footer__social-icon"
            style={{ backgroundColor: "#55ACEE" }}
            href="https://www.linkedin.com/in/tanmay-pandey-03281b232/"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="footer__center">
        <h1 className="footer__title">Useful Links</h1>
        <ul className="footer__list">
          <li className="footer__listItem">Home</li>
          <li className="footer__listItem">Cart</li>
          <li className="footer__listItem">Man Fashion</li>
          <li className="footer__listItem">Woman Fashion</li>
          <li className="footer__listItem">Accessories</li>
          <li className="footer__listItem">My Account</li>
          <li className="footer__listItem">Order Tracking</li>
          <li className="footer__listItem">Wishlist</li>
          <li className="footer__listItem">Terms</li>
        </ul>
      </div>
      <div className="footer__right">
        <h1 className="footer__title">Contact</h1>
        <div className="footer__contactItem">
          <LocationOn style={{ marginRight: "10px" }} /> Civil Lines , Roorkee
        </div>
        <div className="footer__contactItem">
          <PhoneIcon style={{ marginRight: "10px" }} /> +91 XXXXXXXX24
        </div>
        <div className="footer__contactItem">
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@ekharid.in
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          className="footer__payment"
        />
      </div>
    </div>
  );
};

export default Footer;
