import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import qs from "qs";

import "../styles/sidebar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

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
              to={buildQueryString("query", { city: "Manchester" })}
              className="sidebar-link"
            >
              Manchester
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink
              to={buildQueryString("query", { city: "Leeds" })}
              className="sidebar-link"
            >
              Leeds
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink
              to={buildQueryString("query", { city: "Sheffield" })}
              className="sidebar-link"
            >
              Sheffield
            </NavLink>
          </li>
          <li className="sidebar__list-item">
            <NavLink
              to={buildQueryString("query", { city: "Liverpool" })}
              className="sidebar-link"
            >
              Liverpool
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="sidebar__sort">
        <h3 className="sidebar__header">Sort by</h3>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <NavLink
              to={buildQueryString("sort", { price: 1 })}
              className="sidebar-link"
            >
              Price Ascending
            </NavLink>
          </li>

          <li className="sidebar__list-item">
            <NavLink
              to={buildQueryString("sort", { price: -1 })}
              className="sidebar-link"
            >
              Price Descending
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
