import React from "react";
import "./Navbar.css";
import {NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      {/* <ul className="list">
          <li>
            <Link to="/about">About</Link>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/">Home</Link>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/">Home</Link>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link to="/">Home</Link>
            <a href="/user/anil">Anil</a>
          </li>
          <li>
            <Link to="/">Home</Link>
            <a href="/user/peter">Peter</a>
          </li>
        </ul> */}
      <ul className="navbar">
        <li>
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="nav-link" to="/filter">Filter</NavLink>
        </li>
      </ul>
    </div>
  );
}
