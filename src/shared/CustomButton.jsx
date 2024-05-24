import React from "react";

const CustomButton = (props) => {
  const { label, ...otherProps } = props;

  return (
    <button style={buttonStyle} {...otherProps}>
      {label}
    </button>
  );
};

export default CustomButton;

const buttonStyle = {
  padding: "4px 6px",
};
