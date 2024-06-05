import { MenuItem, TextField } from "@mui/material";

const CustomDropdown = (props) => {
  const { label, isRequired, options, ...otherProps } = props;

  return (
    <div>
      <TextField
        select
        label={label}
        size="small"
        sx={{ width: 200 }}
        {...otherProps}
      >
        {options.map(({ label, ...rest }, ind) => (
          <MenuItem key={ind} disableRipple {...rest}>
            {label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default CustomDropdown;
