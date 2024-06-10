import React from "react";
import { checkbox } from "../constants/formConstants";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Radio,
} from "@mui/material";

const CustomChoices = (props) => {
  const { label, options, isRequired, ...otherProps } = props;

  const shouldChecked = (optionValue) =>
    props.type === checkbox
      ? props.value.includes(optionValue)
      : props.value === optionValue;

  return (
    <FormControl>
      <FormLabel
        sx={{
          fontSize: "20px",
          color: "black",
        }}
      >
        {label}
      </FormLabel>
      <Box>
        {options.map((optionProps, ind) => (
          <Box key={ind}>
            <FormControlLabel
              control={
                props.type === checkbox ? (
                  <Checkbox
                    {...otherProps}
                    checked={shouldChecked(optionProps.value)}
                    value={optionProps.value}
                  />
                ) : (
                  <Radio
                    {...otherProps}
                    checked={shouldChecked(optionProps.value)}
                    value={optionProps.value}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                    }}
                  />
                )
              }
              label={optionProps.label}
              sx={{ p: 0.5 }}
            />
          </Box>
        ))}
      </Box>
    </FormControl>
  );
};

export default React.memo(CustomChoices);
