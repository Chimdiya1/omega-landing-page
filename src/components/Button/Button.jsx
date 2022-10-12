import React from "react";
import "./Button.scss";
const Button = ({children, inverted}) => {
  return (
    <button className="button">
        {children}
    </button>
  );
};

export default Button;
