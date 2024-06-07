import { MenuItem, TextField } from "@mui/material";
import React from "react";

const CustomDropdown = (props) => {
  const { label, isRequired, options, ...otherProps } = props;

  return (
    <TextField
      select
      label={label}
      size="small"
      sx={{ width: 150 }}
      {...otherProps}
    >
      {options.map(({ label, ...rest }, ind) => (
        <MenuItem key={ind} disableRipple {...rest}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default React.memo(CustomDropdown);
