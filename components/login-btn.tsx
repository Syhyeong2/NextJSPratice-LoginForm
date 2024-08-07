import { useFormStatus } from "react-dom";

interface LoginBtnProps {
  Login: boolean;
}

export default function LoginBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-96 h-12 rounded-full bg-gray-200 font-bold text-gray-800 mt-2 
      hover:bg-gray-300 transition-all disabled:bg-gray-300 disabled:text-gray-400 font-mono active:scale-95 focus:outline-none"
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}
