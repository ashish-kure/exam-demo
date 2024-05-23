import React from "react";
import { checkbox } from "../constants/formConstants";

const CustomChoices = (props) => {
  const { label, options, isRequired, ...otherProps } = props;

  const shouldChecked = (optionValue) =>
    props.type === checkbox
      ? props.value.includes(optionValue)
      : props.value === optionValue;

  return (
    <div>
      <label>{label}</label> <br />
      {options.map((optionProps, ind) => (
        <label key={ind}>
          <input
            {...otherProps}
            {...optionProps}
            checked={shouldChecked(optionProps.value)}
          />
          {optionProps.label}
        </label>
      ))}
    </div>
  );
};

export default CustomChoices;
