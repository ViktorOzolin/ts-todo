import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="blue darken-2">
      <div className="nav-wrapper px1">
        <a href="/" className="brand-logo">
          TO DO
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список задач</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
