import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      description="Input your details here"
      type="register"
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
