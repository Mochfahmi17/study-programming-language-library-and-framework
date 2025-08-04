import { useRouter } from "next/router";
import styles from "./Login.module.scss";
import Link from "next/link";

export default function LoginViews() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };
  return (
    <section className={styles.login}>
      <h1 className="text-3xl font-bold">Login</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don&apos;t have an account? <Link href="/auth/register">Register</Link>
      </p>
    </section>
  );
}
