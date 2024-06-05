import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  const { label, sx, ...otherProps } = props;

  return (
    <Button
      variant="contained"
      size="small"
      disableRipple
      disableElevation
      sx={{ textTransform: "none", fontSize: 16, ...sx }}
      {...otherProps}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
