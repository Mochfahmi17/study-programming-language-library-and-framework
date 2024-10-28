import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";

const FormRegister = ({ action = null, method = null }) => {
  return (
    <form action={action} method={method}>
      <InputForm
        htmlFor="name"
        label="Full name"
        type="text"
        id="name"
        name="name"
        placeholder="Insert your name here..."
      />

      <InputForm
        htmlFor="email"
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="example@mail.com"
      />

      <InputForm
        htmlFor="password"
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        htmlFor="confirmpassword"
        label="Confirm Passwrod"
        type="password"
        id="confirmpassword"
        name="confirmpassword"
        placeholder="********"
      />

      <Button color="bg-black w-full hover:bg-slate-700 transition-all text-white">
        Sign Up
      </Button>
    </form>
  );
};

export default FormRegister;
