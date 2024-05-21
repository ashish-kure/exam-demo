import React from "react";
import { useSelector } from "react-redux";
import {
  button,
  checkbox,
  radio,
  reset,
  select,
  submit,
} from "../../constants/formConstants";
import CustomInput from "../../shared/CustomInput";
import CustomDropdown from "../../shared/CustomDropdown";
import CustomButton from "../../shared/CustomButton";
import CustomChoices from "../../shared/CustomChoices";

const RenderFormFields = ({ attributes, onChange, onCheckbox }) => {
  const { formData } = useSelector((state) => state.form);

  const { type, name, ...otherAttributes } = attributes;
  const value = formData[name] || "";

  switch (type) {
    case select:
      return (
        <CustomDropdown
          onChange={onChange}
          {...{ value, name, ...otherAttributes }}
        />
      );

    case radio:
    case checkbox:
      return (
        <CustomChoices
          onChange={type === checkbox ? onCheckbox : onChange}
          {...{ value, name, type, ...otherAttributes }}
        />
      );

    case reset:
    case submit:
    case button:
      return <CustomButton {...{ type, ...otherAttributes }} />;

    default:
      return (
        <CustomInput
          onChange={onChange}
          {...{ value, name, type, ...otherAttributes }}
        />
      );
  }
};

export default RenderFormFields;
