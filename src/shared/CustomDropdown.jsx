import React from "react";

const CustomDropdown = (props) => {
  const { label, isRequired, options, ...otherProps } = props;

  return (
    <div>
      <label>{label}</label> <br />
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
    </div>
  );
};

export default CustomDropdown;
