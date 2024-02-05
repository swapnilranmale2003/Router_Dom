import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="list">
          <li>
            {/* <Link to="/about">About</Link> */}
            <a href="/">Home</a>
          </li>
          <br />
          <li>
            {/* <Link to="/">Home</Link> */}
            <a href="/about">About</a>
          </li>
          <li>
            {/* <Link to="/">Home</Link> */}
            <a href="/contact">Contact</a>
          </li>
          <li>
            {/* <Link to="/">Home</Link> */}
            <a href="/user/anil">Anil</a>
          </li>
          <li>
            {/* <Link to="/">Home</Link> */}
            <a href="/user/peter">Peter</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
