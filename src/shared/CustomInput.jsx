import React from "react";

const CustomInput = (props) => {
  const { label, onChange, isRequired, message, ...otherProps } = props;

  return (
    <div style={inputStyle}>
      <label>{label}</label>
      <input onChange={(event) => onChange(event, message)} {...otherProps} />
    </div>
  );
};

export default CustomInput;

const inputStyle = {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
};
