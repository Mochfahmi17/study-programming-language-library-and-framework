import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: ReactNode;
};

const disableNavbar: string[] = ["/auth/login", "/auth/register", "/404"];

const AppShell = ({ children }: AppShellProps) => {
  const router = useRouter();
  return (
    <>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default AppShell;
