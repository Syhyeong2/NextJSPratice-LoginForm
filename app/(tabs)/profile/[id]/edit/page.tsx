import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { editUserProfile } from "./action";
import { useState } from "react";
import ProfileEditForm from "@/components/profile-edit-form";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const session = await getSession();
  if (!session.id) {
    redirect("/");
  } else if (session.id !== id) {
    redirect("/tweets");
  }
  return (
    <div className="h-screen p-5">
      <div className="mb-10">this is edit page</div>
      <ProfileEditForm />
    </div>
  );
}
