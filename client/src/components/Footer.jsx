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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="footer__social-container">
          <div
            className="footer__social-icon"
            style={{ backgroundColor: "#385999" }}
          >
            <Facebook />
          </div>
          <div
            className="footer__social-icon"
            style={{ backgroundColor: "#E4405F" }}
          >
            <InstagramIcon />
          </div>
          <div
            className="footer__social-icon"
            style={{ backgroundColor: "#55ACEE" }}
          >
            <TwitterIcon />
          </div>
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
