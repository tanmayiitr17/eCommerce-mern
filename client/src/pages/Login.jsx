import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
  }

  const handleSwitchToRegister = () => {
    navigate("/register");
  }

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h1 className="login__title">SIGN IN</h1>
        <form className="login__form">
          <input
            type="text"
            className="login__input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login__input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button"
            onClick={handleClick}
          // disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <span className="login__error">Something went wrong...</span>}
          <a href="" className="login__link">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a onClick={handleSwitchToRegister} className="login__link">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
