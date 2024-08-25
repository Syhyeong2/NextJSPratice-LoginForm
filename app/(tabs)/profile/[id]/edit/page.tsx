"use client";

import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";
import { useFormState } from "react-dom";
import { editUserProfile } from "./action";
import { useState } from "react";

export default async function Edit({ params }: { params: { id: string } }) {
  const [state, dispatch] = useFormState(editUserProfile, null);

  return (
    <div className="h-screen p-5">
      <div className="mb-10">this is edit page</div>
      <form action={dispatch} className="flex flex-col ">
        <FormInput
          name="email"
          placeholder="email"
          required={false}
          type="email"
          errors={state?.fieldErrors.email}
        ></FormInput>
        <FormInput
          name="username"
          placeholder="username"
          required={false}
          type="username"
          errors={state?.fieldErrors.username}
        ></FormInput>
        <FormInput
          name="bio"
          placeholder="bio"
          required={false}
          type="bio"
          errors={state?.fieldErrors.bio}
        ></FormInput>
        <FormBtn text="edit" />
      </form>
    </div>
  );
}
