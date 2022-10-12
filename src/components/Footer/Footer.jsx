import React from "react";
import "./Footer.scss";
import omega from "../../assets/omega.png";
import twitter from "../../assets/twitter.png";
import medium from "../../assets/medium.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={omega} alt="logo" />
        <span>mega</span>
      </div>
      <ul className="menu">
        <li className="menu-item">Staking Pools</li>
        <li className="menu-item">Claim rewards</li>
        <li className="menu-item">FAQs</li>
      </ul>
      <div style={{display:"flex"}}>
        <img style={{marginRight:"29px"}} src={twitter} alt="twitter" />
        <img src={medium} alt="medium" />
      </div>
    </footer>
  );
};

export default Footer;
