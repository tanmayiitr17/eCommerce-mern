import React from "react";
import './Register.css';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    register(user, dispatch);
    useNavigate("/");
  }

  return (
    <div className="register__container">
      <div className="register__wrapper">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <form action="" className="register__form">
          <input
            name="username"
            type="text"
            className="register__input"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            name="fullName"
            type="text"
            className="register__input"
            placeholder="full name"
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            className="register__input"
            placeholder="xyz@gmail.com"
            onChange={handleChange}
          />
          <input
            name="password"
            type="text"
            className="register__input"
            placeholder="password"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            className="register__input"
            placeholder="+91 XXXXXXXX78"
            onChange={handleChange}
          />
          <input
            name="address"
            type="text"
            className="register__input"
            placeholder="XYZ | INDIA"
            onChange={handleChange}
          />
          <span className="register__aggrement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button onClick={handleClick} className="register__button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
