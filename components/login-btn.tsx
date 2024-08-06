import { useFormStatus } from "react-dom";

interface LoginBtnProps {
  Login: boolean;
}

export default function LoginBtn({ Login }: LoginBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending} // || Login
      className="w-96 h-12 rounded-full bg-gray-200 font-bold text-gray-800 mt-2 hover:bg-gray-300 transition-all disabled:bg-gray-300 disabled:text-gray-400 font-mono active:scale-95"
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}
