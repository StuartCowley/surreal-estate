import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/sidebar.css";

const SideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <aside className="sidebar">
      <section className="sidebar__search">
        <h3 className="sidebar__header">Search</h3>
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="sidebar__query">
        <h3 className="sidebar__header">Filter by City</h3>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <NavLink
              to={`?query={"city": "Manchester"}`}
              className="sidebar-link"
            >
              Manchester
            </NavLink>
          </li>

          <li className="sidebar__list-item">
            <NavLink
              to={`?query={"city": "Liverpool"}`}
              className="sidebar-link"
            >
              Liverpool
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
