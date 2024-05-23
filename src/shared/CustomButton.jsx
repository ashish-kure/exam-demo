import React from "react";

const CustomButton = (props) => {
  const { label, ...otherProps } = props;

  return <button {...otherProps}>{label}</button>;
};

export default CustomButton;
