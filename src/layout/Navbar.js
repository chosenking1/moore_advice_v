import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container">
    <span className="navbar-brand">MOORE ADVICE INC</span>

    <ul className="navbar-nav ms-auto">
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
  </div>
</nav>
  );
}

export default Navbar;
