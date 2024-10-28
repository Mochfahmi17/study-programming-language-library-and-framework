import { forwardRef } from "react";

const Input = forwardRef(function input(props, ref) {
  const { type, placeholder, id, name } = props;
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full rounded border px-3 py-2 text-sm text-slate-700 placeholder:opacity-50"
        placeholder={placeholder}
        ref={ref}
      />
    </>
  );
});

export default Input;
