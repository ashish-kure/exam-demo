import React from "react";
import { TextField } from "@mui/material";

const CustomInput = (props) => {
  const { label, onChange, isRequired, message, sx, ...otherProps } = props;

  return (
    <div style={inputStyle}>
      <TextField
        size="small"
        variant="outlined"
        label={label}
        onChange={(event) => onChange(event, message)}
        sx={{ width: 300, ...sx }}
        {...otherProps}
      />
    </div>
  );
};

export default CustomInput;

const inputStyle = {
  // display: "flex",
  // flexDirection: "column",
  // width: "fit-content",
};
