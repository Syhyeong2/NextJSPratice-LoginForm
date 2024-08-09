import { InputHTMLAttributes } from "react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import { KeyIcon } from "@heroicons/react/16/solid";

interface LoginInputProps {
  name: string;
  type: string;
  required: boolean;
  placeholder: string;
  errors?: string[];
  errorType?: string;
}

export default function FormInput({
  name,
  errors,
  ...rest
}: LoginInputProps & InputHTMLAttributes<HTMLInputElement>) {
  console.log(errors);
  return (
    <div className="flex flex-col relative ">
      {name === "email" && (
        <EnvelopeIcon className="login-input-icon text-gray-500" />
      )}
      {name === "username" && (
        <UserIcon className="login-input-icon text-gray-500" />
      )}
      {name === "password" && (
        <KeyIcon className="login-input-icon text-gray-500" />
      )}
      {name === "confirm_password" && (
        <KeyIcon className="login-input-icon text-gray-500" />
      )}
      <input
        className={`w-96 h-12 px-11 rounded-full outline-none ring-2 focus:ring-2 ring-neutral-200 focus:outline-none transition-all mb-6 ${
          errors ? "ring-red-400" : "ring-neutral-200 "
        } ${errors ? "focus:ring-4" : "focus:ring-4 focus:ring-neutral-400"}`}
        name={name}
        {...rest}
      ></input>
      {errors &&
        errors?.map((error, index) => (
          <span className="text-red-400 -mt-2 my-5 transition-all " key={index}>
            {error}
          </span>
        ))}
    </div>
  );
}
