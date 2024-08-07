"use client";
import { useFormState } from "react-dom";
import { handleForm } from "./action";
import LoginInput from "../components/login-input";
import LoginBtn from "@/components/login-btn";
import { FireIcon } from "@heroicons/react/16/solid";
import LoginWelcomeBox from "@/components/login-welcome-box";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  console.log(state);

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <FireIcon className="mb-12 size-24 text-red-400" />
      <form action={action}>
        <LoginInput
          name="email"
          placeholder="Email"
          type="email"
          required={true}
          errors={state?.error?.fieldErrors.email}
        />
        <LoginInput
          name="username"
          placeholder="Username"
          type="id"
          required={true}
          errors={state?.error?.fieldErrors.username}
        />
        <LoginInput
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          errors={state?.error?.fieldErrors.password}
        />
        <LoginBtn />
      </form>
      {state?.token && <LoginWelcomeBox />}
    </div>
  );
}
