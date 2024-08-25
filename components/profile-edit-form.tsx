"use client";

import { useFormState } from "react-dom";
import FormBtn from "./form-btn";
import FormInput from "./form-input";
import { editUserProfile } from "@/app/(tabs)/profile/[id]/edit/action";

export default function ProfileEditForm() {
  const [state, dispatch] = useFormState(editUserProfile, null);

  return (
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
  );
}
