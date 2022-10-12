import React from "react";
import "./ColoredText.scss";
const ColoredText = ({ children }) => {
  return <span className="coloredText">{children}</span>;
};

export default ColoredText;
