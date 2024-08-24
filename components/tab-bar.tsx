import { UserIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "./logo";

export default function TabBar() {
  return (
    <div className="bg-gray-200 sm:bg-white w-full fixed h-16 bottom-0 flex items-center justify-around max-w-screen-sm sm:flex-col sm:h-screen sm:w-40 sm:justify-start sm:gap-2 sm:-ml-44 sm:items-start ">
      <div className="mt-5 -mb-10 hidden sm:block">
        <Logo size="small" />
      </div>
      <Link
        href={"/tweets"}
        className="flex items-center sm:gap-2 hover:bg-slate-200 sm:p-2 rounded-xl transition-colors"
      >
        <HomeIcon className="size-8" />
        <div className="hidden sm:block">Home</div>
      </Link>
      <Link
        href={"/"}
        className="flex items-center sm:gap-2 hover:bg-slate-200 sm:p-2 rounded-xl transition-colors"
      >
        <HomeIcon className="size-8" />
        <div className="hidden sm:block">Explore</div>
      </Link>
      <Link
        href={"/profile"}
        className="flex items-center sm:gap-2 hover:bg-slate-200 sm:p-2 rounded-xl transition-colors"
      >
        <UserIcon className="size-8" />
        <div className="hidden sm:block">Profile</div>
      </Link>
      <Link
        href={"/"}
        className="flex items-center sm:gap-2 hover:bg-slate-200 sm:p-2 rounded-xl transition-colors"
      >
        <HomeIcon className="size-8" />
        <div className="hidden sm:block">About Us</div>
      </Link>
    </div>
  );
}

//홈(트윗),Default,Default, 프로필,
