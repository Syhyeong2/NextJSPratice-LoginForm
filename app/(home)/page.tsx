import LoginWelcomeBox from "@/components/login-welcome-box";
import Logo from "@/components/logo";
import db from "@/lib/db";
import getSession from "@/lib/session";
import Link from "next/link";
import { use } from "react";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
}

export default async function Home() {
  const user = await getUser();
  return (
    <div className="flex flex-col justify-center items-center gap-5">
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
      {user && <LoginWelcomeBox user={user} />}
    </div>
  );
}
