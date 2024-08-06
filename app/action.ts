"use server";

interface FormState {
  errors: string[];
  errorType: string;
  login: boolean;
}

export async function handleForm(prevstate: FormState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (formData.get("password") === "12345") {
    return {
      errors: [],
      errorType: "",
      login: true,
    };
  } else {
    return {
      errors: ["Wrong Password"],
      errorType: "password",
      login: false,
    };
  }
}
