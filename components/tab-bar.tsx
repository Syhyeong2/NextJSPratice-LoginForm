import { UserIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TabBar() {
  return (
    <div className="bg-gray-400 w-full fixed h-16 bottom-0 flex items-center justify-around max-w-screen-sm">
      <Link href={"/tweets"}>
        <HomeIcon className="size-6" />
      </Link>
      <Link href={"/"}>
        <HomeIcon className="size-6" />
      </Link>
      <Link href={"/"}>
        <HomeIcon className="size-6" />
      </Link>
      <Link href={"/profile"}>
        <UserIcon className="size-6" />
      </Link>
    </div>
  );
}

//홈(트윗),Default,Default, 프로필,
