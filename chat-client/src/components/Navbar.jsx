import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3 className="title">Callme</h3>
          <div className="icon">open</div>
        </div>
        <div className="menu">
          <ul className="items">
            <li className="list-items">chats</li>
            <li className="list-items">voice call</li>
            <li className="list-items">video call</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
