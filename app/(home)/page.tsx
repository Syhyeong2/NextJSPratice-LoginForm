"use client";

import Logo from "@/components/logo";
import FormBtn from "@/components/form-btn";
import Link from "next/link";

export default function LogIn() {
  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-5">
      <Logo size="large" />
      <Link href={"/log-in"} className="primary-btn">
        Login
      </Link>
      <Link href={"/create-account"} className="primary-btn">
        create account
      </Link>
      <Link href={"/profile"} className="primary-btn">
        profile 로그인시에만 보이게
      </Link>
    </div>
  );
}
