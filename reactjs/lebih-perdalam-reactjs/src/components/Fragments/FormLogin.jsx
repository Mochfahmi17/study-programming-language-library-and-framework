import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";
import { login } from "../../services/auth.service";

const FormLogin = ({ action = null, method = null }) => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form action={action} method={method} onSubmit={handleLogin}>
      <InputForm
        htmlFor="username"
        label="Username"
        type="text"
        id="username"
        name="username"
        placeholder="Jhon doe"
        ref={usernameRef}
      />
      <InputForm
        htmlFor="password"
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="********"
      />
      <Button
        type="submit"
        color="bg-black w-full hover:bg-slate-700 transition-all text-white"
      >
        Sign In
      </Button>
      {loginFailed && (
        <p className="mt-3 text-center text-red-500">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
