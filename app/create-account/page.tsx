"use client";

import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import Logo from "@/components/logo";
import { useFormState } from "react-dom";

export default function CreateAccount() {
  // const [state, action] = useFormState(handleForm, null);
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <Logo size="medium"></Logo>
      <form>
        <FormInput
          name="email"
          placeholder="Email"
          type="email"
          required={true}
          // errors={state?.error?.fieldErrors.email}
        />
        <FormInput
          name="username"
          placeholder="Username"
          type="id"
          required={true}
          // errors={state?.error?.fieldErrors.username}
        />
        <FormInput
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          // errors={state?.error?.fieldErrors.password}
        />
        <FormInput
          name="confirm_password"
          placeholder="Confirm_Password"
          type="password"
          required={true}
          // errors={state?.error?.fieldErrors.password}
        />
        <FormBtn text="create account" />
      </form>
    </div>
  );
}
