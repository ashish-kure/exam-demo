import React from "react";
import { TextField } from "@mui/material";

const CustomInput = (props) => {
  const { label, onChange, isRequired, message, sx, ...otherProps } = props;

  return (
    <TextField
      size="small"
      variant="outlined"
      label={label}
      onChange={(event) => onChange(event, message)}
      sx={{ width: 300, ...sx }}
      {...otherProps}
    />
  );
};

export default React.memo(CustomInput);
