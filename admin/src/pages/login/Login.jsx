import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser?.isAdmin;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();   
    login(dispatch, { username, password });
  }


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type='text'
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{
          border: "none", borderRadius: "5px",
          backgroundColor: "darkblue", color: 'white', fontWeight: "600",
          cursor: "pointer", padding: "10px", width: "100px"
        }}
        onClick={handleClick}
      >
        Login
      </button>
      <p style={{ color: "red" }} >Only admin allowed!</p>
    </div>
  )
}

export default Login