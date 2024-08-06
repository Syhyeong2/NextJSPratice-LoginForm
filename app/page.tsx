"use client";

import { useFormState } from "react-dom";
import { handleForm } from "./action";
import LoginInput from "../components/login-input";
import LoginBtn from "@/components/login-btn";
import { redirect } from "next/navigation";

export default function Home() {
  const [state, action] = useFormState(handleForm as any, {
    errors: [],
    errorType: "",
    login: false,
  });

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <svg
        className="size-24 mb-14"
        data-slot="icon"
        fill="rgba(255, 0, 0, 0.5)"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M8.074.945A4.993 4.993 0 0 0 6 5v.032c.004.6.114 1.176.311 1.709.16.428-.204.91-.61.7a5.023 5.023 0 0 1-1.868-1.677c-.202-.304-.648-.363-.848-.058a6 6 0 1 0 8.017-1.901l-.004-.007a4.98 4.98 0 0 1-2.18-2.574c-.116-.31-.477-.472-.744-.28Zm.78 6.178a3.001 3.001 0 1 1-3.473 4.341c-.205-.365.215-.694.62-.59a4.008 4.008 0 0 0 1.873.03c.288-.065.413-.386.321-.666A3.997 3.997 0 0 1 8 8.999c0-.585.126-1.14.351-1.641a.42.42 0 0 1 .503-.235Z"
        ></path>
      </svg>
      <form action={action}>
        <LoginInput
          name="email"
          placeholder="Email"
          type="email"
          required={true}
          errors={state.errors}
          errorType={state.errorType}
        />
        <LoginInput
          name="username"
          placeholder="Username"
          type="id"
          required={true}
          errors={state.errors}
          errorType={state.errorType}
        />
        <LoginInput
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          errors={state.errors}
          errorType={state.errorType}
        />

        <LoginBtn Login={state.login} />
      </form>
      {state.login && (
        <div className="w-96 h-16 bg-emerald-500 mt-5 rounded-3xl flex items-center font-semibold gap-4 font-mono">
          <svg
            className="size-7 ml-4"
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
            ></path>
          </svg>
          Welcome Back!
        </div>
      )}
    </div>
  );
}
