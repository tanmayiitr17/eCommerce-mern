import React from "react";
import "./Newsletter.css";
import Send from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="newsletter__container">
      <h1 className="newsletter__title">Newsletter</h1>
      <div className="newsletter__desc">Get timely updates from your favorite products.</div>
      <div className="newsletter__input-container">
        <input
          type="text"
          className="newsletter__input"
          placeholder="Your email"
        />
        <button className="newsletter__button">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
