import React from "react";

const CustomInput = (props) => {
  const { label, onChange, isRequired, message, ...otherProps } = props;

  return (
    <div>
      <label>{label}</label> <br />
      <input onChange={(event) => onChange(event, message)} {...otherProps} />
    </div>
  );
};

export default CustomInput;
