import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "@greatsumini/react-facebook-login";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";

import "../styles/navbar.css";

const NavBar = ({ onLogin, onLogout, userID }) => {
  const handleLogout = () => {
    onLogout();
  };
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
      {userID === "" ? (
        <FacebookLogin
          appId="1127110308230331"
          onSuccess={(response) => {
            onLogin(response);
          }}
          onFail={(error) => {
            console.log("Login Failed!", error);
          }}
        />
      ) : (
        <button type="button" onClick={handleLogout}>
          Sign out
        </button>
      )}
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};

export default NavBar;
