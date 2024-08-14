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
    <div className="flex justify-evenly items-center gap-5 h-screen sm:flex-row flex-col">
      <div className="flex justify-center items-center sm:mb-10 -my-20">
        <Logo size="xlarge" />
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="font-[700] text-7xl -mb-5">CANDLE</div>
        <div className="font-[500] sm:mb-10">To light up your life.</div>
        <div className="font-[600] text-4xl">Sign Up Now.</div>
        <Link
          href={"/create-account"}
          className="primary-btn bg-red-200 hover:bg-red-300"
        >
          create account
        </Link>
        <Link href={"/"} className="primary-btn">
          countinue with github
        </Link>
        <div>OR</div>
        <Link href={"/log-in"} className="primary-btn">
          Login
        </Link>
      </div>
    </div>
  );
}
