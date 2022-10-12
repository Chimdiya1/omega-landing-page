import React, { useState } from "react";
import "./Nav.scss";
import omega from "../../assets/omega.png";
import Button from "../Button/Button";
import Menu from "../../assets/menu-icon.png";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">
        <img src={omega} alt="logo" />
        <span>mega</span>
      </div>
      <ul className={`menu ${open && "open"}`}>
        <li className="menu-item active">Home</li>
        <li className="menu-item">Staking Pools</li>
        <li className="menu-item">Claim rewards</li>
        <li className="menu-item">FAQs</li>
        <Button className="menu-item">Connect wallet</Button>
      </ul>
      <Button>Connect wallet</Button>
      <img className="menu-btn" alt="menu" src={Menu} onClick={() => setOpen(!open)} />
    </nav>
  );
};

export default Nav;
