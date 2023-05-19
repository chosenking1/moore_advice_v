import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Product List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">
            Create Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
