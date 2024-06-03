import React from "react";
import { TextField } from "@mui/material";

const CustomInput = (props) => {
  const { label, onChange, isRequired, message, ...otherProps } = props;

  return (
    <div style={inputStyle}>
      {/* <label>{label}</label>
      <input onChange={(event) => onChange(event, message)} {...otherProps} /> */}
      <TextField
        size="small"
        variant="outlined"
        label={label}
        onChange={(event) => onChange(event, message)}
        sx={{
          width: 300,
        }}
        {...otherProps}
      />
    </div>
  );
};

export default CustomInput;

const inputStyle = {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
};
