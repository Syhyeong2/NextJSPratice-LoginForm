import { CheckBadgeIcon } from "@heroicons/react/16/solid";

export default function LoginWelcomeBox() {
  return (
    <div className="w-96 h-16 bg-emerald-500 mt-5 rounded-3xl flex items-center font-semibold gap-3 font-mono">
      <CheckBadgeIcon className="size-7 ml-4 text-gray-900" /> Welcome Back!
    </div>
  );
}
