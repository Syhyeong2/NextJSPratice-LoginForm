"use client";
import { useFormState } from "react-dom";
import { handleIogin } from "./action";
import FormInput from "../../../components/form-input";
import FormBtn from "@/components/form-btn";
import { FireIcon } from "@heroicons/react/16/solid";
import LoginWelcomeBox from "@/components/login-welcome-box";
import Logo from "@/components/logo";

export default function Login() {
  const [state, dispatch] = useFormState(handleIogin, null);
  console.log(state);

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <Logo size="medium"></Logo>
      <form action={dispatch}>
        <FormInput
          name="email"
          placeholder="Email"
          type="email"
          required={true}
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="username"
          placeholder="Username"
          type="id"
          required={true}
          errors={state?.fieldErrors.username}
        />
        <FormInput
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          errors={state?.fieldErrors.password}
        />
        <FormBtn text="log-in" />
      </form>
    </div>
  );
}
