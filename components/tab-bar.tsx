import { UserIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TabBar() {
  return (
    <div className="bg-neutral-200 w-full fixed h-16 bottom-0 flex items-center justify-around max-w-screen-sm sm:flex-col sm:h-screen sm:w-20 sm:justify-start sm:gap-20 sm:-ml-24">
      <Link href={"/tweets"} className="flex sm:mt-20">
        <HomeIcon className="size-6" />
        <div className="">Home</div>
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
