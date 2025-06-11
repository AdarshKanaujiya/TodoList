import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink  to="/" className="active-link">
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/weather" className="active-link">
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" className="active-link">
            To-Do
          </NavLink>
        </li>
        <li>
          <NavLink to="/github" className="active-link">
            GitHub Dashboard
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

