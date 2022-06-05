import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Site logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
