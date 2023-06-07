import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="left">
        <p>Mern Auth</p>
      </div>
      <div className="right">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Signup</Link>
      </div>
    </div>
  );
};

export default Header;
