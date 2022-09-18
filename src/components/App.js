import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

import "../styles/app.css";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </>
  );
};

export default App;
