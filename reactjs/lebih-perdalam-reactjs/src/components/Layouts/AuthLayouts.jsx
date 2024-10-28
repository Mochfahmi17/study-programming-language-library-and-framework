import { Link } from "react-router-dom";

const AuthLayouts = ({ title, description, children, type }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-md p-4">
        <h1 className="mb-2 text-3xl font-bold text-slate-700">{title}</h1>
        <p className="mb-8 text-sm font-medium text-slate-500">{description}</p>
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
