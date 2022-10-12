import React from "react";
import "./InvertedButton.scss";
const InvertedButton = ({ children }) => {
  return <button className="invertedButton">{children}</button>;
};

export default InvertedButton;
