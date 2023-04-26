import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import NavBar from "./NavBar";

import "../styles/app.css";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => {
    FacebookLoginClient.logout(() => {
      setUserID("");
    });
  };

  return (
    <>
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Routes>
        <Route path="/" element={<Properties userID={userID} />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </>
  );
};

export default App;
