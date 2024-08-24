import getSession from "@/lib/session";
import { notFound } from "next/navigation";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const session = await getSession();
  if (!session.id) {
    notFound();
  } else if (session.id !== id) {
    notFound();
  }
  return <div className="h-screen">this is edit page</div>;
}
