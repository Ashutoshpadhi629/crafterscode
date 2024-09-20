import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function SettingsRoutes() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/challenges/settings");
  }

  return <h1>Settings page</h1>;
}
