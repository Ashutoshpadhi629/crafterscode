import { CreateChallenge } from "@/app/components/create-challenge";
import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function CreateRoutes() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/challenges/create");
  }

  if (user.role !== "admin") {
    redirect("/challenges");
  }

  return (
    <div className="">
      <CreateChallenge
        title="Create Challenges"
        description="Create Your Challenge here..."
        buttonText="Create Challenge"
        href="#"
      />
    </div>
  );
}
