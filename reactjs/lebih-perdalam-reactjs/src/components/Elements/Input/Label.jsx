const Label = ({ label, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-bold text-slate-700"
    >
      {label}
    </label>
  );
};

export default Label;
