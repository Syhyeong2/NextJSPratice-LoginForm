"use client";

import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import Logo from "@/components/logo";
import { useFormState } from "react-dom";
import { handleCreateAccount } from "./action";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(handleCreateAccount, null);
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
        <FormInput
          name="confirm_password"
          placeholder="Confirm_Password"
          type="password"
          required={true}
          errors={state?.fieldErrors.confirm_password}
        />
        <FormBtn text="create account" />
      </form>
    </div>
  );
}
