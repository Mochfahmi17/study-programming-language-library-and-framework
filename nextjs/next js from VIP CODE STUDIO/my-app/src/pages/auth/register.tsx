import Link from "next/link";

export default function RegisterPage() {
  return (
    <section>
      <h1>Register</h1>
      <p>
        Already have an account? <Link href="/auth/login">Login</Link>
      </p>
    </section>
  );
}
