import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h3>FoodYum</h3>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile-App</li>
          <li>contact-us</li>
        </ul>
        <div className="nav-right">
          <img src="" alt="search"></img>
          <div className="nav-search-icon">
            <img src="" alt=""></img>
            <div className="dot"></div>
          </div>
          <button>Sign-In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
