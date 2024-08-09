import { useFormStatus } from "react-dom";

interface FormBtnProps {
  text: string;
}

export default function FormBtn({ text }: FormBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="primary-btn mt-2 active:scale-95">
      {pending ? "Loading..." : text}
    </button>
  );
}
