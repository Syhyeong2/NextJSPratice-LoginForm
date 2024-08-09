"use client";
import { useFormState } from "react-dom";
import { handleIogin } from "./action";
import FormInput from "../../components/form-input";
import FormBtn from "@/components/form-btn";
import { FireIcon } from "@heroicons/react/16/solid";
import LoginWelcomeBox from "@/components/login-welcome-box";
import Logo from "@/components/logo";

export default function Home() {
  const [state, action] = useFormState(handleIogin, null);
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <Logo size="medium"></Logo>
      <form action={action}>
        <FormInput
          name="email"
          placeholder="Email"
          type="email"
          required={true}
          errors={state?.error?.fieldErrors.email}
        />
        <FormInput
          name="username"
          placeholder="Username"
          type="id"
          required={true}
          errors={state?.error?.fieldErrors.username}
        />
        <FormInput
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          errors={state?.error?.fieldErrors.password}
        />
        <FormBtn text="log-in" />
      </form>
      {state?.token && <LoginWelcomeBox />}
    </div>
  );
}
