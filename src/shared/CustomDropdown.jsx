import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const CustomDropdown = (props) => {
  const { label, isRequired, options, ...otherProps } = props;

  return (
    <div>
      <label>{label}</label>
      <select {...otherProps}>
        <option value="select" hidden>
          Select
        </option>

        {options.map(({ label, ...restOptions }, ind) => (
          <option key={ind} {...restOptions}>
            {label}
          </option>
        ))}
      </select>
      {/* <FormControl size="small">
        <InputLabel id={`select-${label}`}>{label}</InputLabel>
        <Select
          label={label}
          labelId={`select-${label}`}
          autoWidth
          {...otherProps}
        >
          {options.map(({ label, ...restOptions }, ind) => (
            <MenuItem key={ind} {...restOptions}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
    </div>
  );
};

export default CustomDropdown;
