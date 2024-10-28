const Button = ({
  color = "bg-black",
  children,
  onClick = () => {},
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={`h-10 rounded-md px-6 font-semibold ${color} text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
