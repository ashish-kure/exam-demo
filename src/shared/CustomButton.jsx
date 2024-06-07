import React from "react";
import { Button } from "@mui/material";

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

export default React.memo(CustomButton);
