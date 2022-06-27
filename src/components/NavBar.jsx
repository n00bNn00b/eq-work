import React from "react";

const NavBar = () => {
  return (
    <div className="navbar top-0 fixed z-20 bg-primary text-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#stats">Statistics</a>
            </li>
            <li>
              <a href="#map">Map</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          EQ Works
        </a>
      </div>
      <div className="navbar-center bg-primary hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#stat">Statistics</a>
          </li>
          <li>
            <a href="#map">Map</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Login</a>
      </div> */}
    </div>
  );
};

export default NavBar;
