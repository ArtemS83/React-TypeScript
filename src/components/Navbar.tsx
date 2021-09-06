import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper lime accent-4 px1">
        <Link to="/" className="brand-logo">
          React+TS
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/todos" activeClassName="activeLink">
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="activeLink">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
