import React from "react";
import { Label, Input } from "../styles/StyledComponents";

const FormInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled = false,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled ? "disabled" : ""}
      />
    </div>
  );
};

export default FormInput;
