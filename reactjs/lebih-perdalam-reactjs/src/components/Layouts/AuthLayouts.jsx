import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = ({ title, description, children, type }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  console.log(isDarkMode);

  return (
    <div
      className={`flex min-h-screen items-center justify-center ${isDarkMode && "bg-slate-900"}`}
    >
      <div className="w-full max-w-sm rounded-md p-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute right-2 top-2 rounded bg-blue-600 p-2 text-white"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1
          className={`mb-2 text-3xl font-bold text-slate-700 ${isDarkMode && "text-white"}`}
        >
          {title}
        </h1>
        <p
          className={`mb-8 text-sm font-medium text-slate-500 ${isDarkMode && "text-slate-300"}`}
        >
          {description}
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-5 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-blue-600 hover:text-blue-500"
        >
          Sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-5 text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-bold text-blue-600 hover:text-blue-500"
        >
          Sign in
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
