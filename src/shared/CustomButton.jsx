import React from "react";
import ButtonLoader from "../shared/ButtonLoader";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  const { label, sx, loading, loaderColor, ...otherProps } = props;

  return (
    <Button
      variant="contained"
      size="small"
      disableRipple
      disableElevation
      disabled={loading}
      sx={{ p: 1, textTransform: "none", fontSize: 16, ...sx }}
      {...otherProps}
    >
      {loading ? <ButtonLoader {...{ loaderColor }} /> : label}
    </Button>
  );
};

export default React.memo(CustomButton);
