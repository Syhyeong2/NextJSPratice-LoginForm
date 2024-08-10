import { CheckBadgeIcon } from "@heroicons/react/16/solid";

interface UserProps {
  user: {
    id: number;
    username: string;
    password: string;
    email: string;
    bio: string | null;
    created_at: Date;
    updated_at: Date;
  };
}

export default function LoginWelcomeBox({ user }: UserProps) {
  return (
    <div className="w-96 h-16 bg-emerald-500 mt-5 rounded-3xl flex items-center font-semibold gap-3 font-mono">
      <CheckBadgeIcon className="size-7 ml-4 text-gray-900" /> Welcome Back!
      {user.username}
    </div>
  );
}
