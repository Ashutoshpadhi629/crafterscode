import Link from "next/link";
import { ThemeToggle } from "../components/theme-toggler";
import DashboardItems from "../components/dashbord-items";
import { SquareKanban } from "lucide-react";

import { UserButton } from "../components/user-button";
import { SignInButton } from "../components/auth-page";
import getSession from "@/lib/getSession";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[80px_1fr]">
      <div className="hidden md:block bg-muted-foreground/10 dark:bg-muted/10">
        <div className="flex flex-col h-full max-h-screen  gap-2 ">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6 justify-center border-b border-r">
            <Link href={"/"} className="flex items-center gap-2 font-semibold ">
              <SquareKanban size={40} />
            </Link>
          </div>

          <div className="flex-1 border-r">
            <nav className="grid items-start px-2 font-medium lg:px-4 justify-center w-full">
              <DashboardItems />
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <header className="flex h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6 bg-muted-foreground/10 dark:bg-muted/10">
          <div className="ml-auto flex item-cneter gap-x-5">
            <ThemeToggle />

            {user ? <UserButton user={user} /> : <SignInButton />}
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 dark:bg-muted/40">
          {children}
        </main>
      </div>
    </div>
  );
}
