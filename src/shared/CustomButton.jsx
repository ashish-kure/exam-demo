import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  const { label, ...otherProps } = props;

  return (
    // <button style={buttonStyle} {...otherProps}>
    //   {label}
    // </button>
    <Button variant="contained" size="small" {...otherProps}>
      {label}
    </Button>
  );
};

export default CustomButton;

const buttonStyle = {
  padding: "4px 6px",
};
