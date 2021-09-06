import React from 'react';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper lime accent-4 px1">
        <a href="/" className="brand-logo">
          React+TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Todos</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
