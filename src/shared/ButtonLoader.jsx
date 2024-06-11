import React from "react";
import "../styles/ButtonLoader.css";

const ButtonLoader = ({ loaderColor }) => {
  const color = loaderColor || "black";
  return (
    <div
      className="inner-circle"
      style={{ borderTopColor: color, borderRightColor: color }}
    ></div>
  );
};

export default ButtonLoader;
