import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light expense-navbar">
      <div className="container-fluid">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link btn ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link btn ${
                location.pathname === "/add" ? "active" : ""
              }`}
              to="/add"
            >
              Add Expense
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link btn ${
                location.pathname === "/view" ? "active" : ""
              }`}
              to="/view"
            >
              View Expenses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link btn ${
                location.pathname === "/visualize" ? "active" : ""
              }`}
              to="/visualize"
            >
              Visualization
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
