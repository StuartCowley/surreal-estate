import React from "react";
import logo from "../assets/logo.png";

import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Site logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="view-properties">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="add-property">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
