import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(function input(props, ref) {
  const { htmlFor, label, type, id, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor} label={label}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
