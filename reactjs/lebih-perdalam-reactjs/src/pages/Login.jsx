import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts
        title="Login"
        description="Welcome, please enter your email"
        type="login"
      >
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
