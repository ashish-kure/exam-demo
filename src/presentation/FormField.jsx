import React from "react";
import {
  button,
  checkbox,
  radio,
  reset,
  select,
  submit,
} from "../constants/formConstants";
import CustomInput from "../shared/CustomInput";
import CustomDropdown from "../shared/CustomDropdown";
import CustomButton from "../shared/CustomButton";
import CustomChoices from "../shared/CustomChoices";
import { equal } from "../utils/javascript";

const FormField = ({ formData, attributes, onChange, onCheckbox, loading }) => {
  const { type, name, ...otherAttributes } = attributes;
  const value = formData?.[name] ?? "";

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
          onChange={equal(type, checkbox) ? onCheckbox : onChange}
          {...{ value, name, type, ...otherAttributes }}
        />
      );

    case reset:
    case button:
      return <CustomButton {...{ type, ...otherAttributes }} />;

    case submit:
      return (
        <CustomButton
          {...{ type, loading, loaderColor: "white", ...otherAttributes }}
        />
      );

    default:
      return (
        <CustomInput
          onChange={onChange}
          {...{ value, name, type, ...otherAttributes }}
        />
      );
  }
};

export default FormField;
