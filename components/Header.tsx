import Link from "next/link";
import { auth } from "@/auth";
import { SignOutButton } from "@/components/SignOutButton";
import NavLinks from "./NavLinks";

export default async function Header() {
  const session = await auth();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-sky-900 text-white shadow">
      <div className="page-container flex flex-col gap- py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">
            Ridgecrest Ward Sacrament Meetings
          </h1>
          <p className="text-sm opacity-90">{today}</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <NavLinks />
          {session?.user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm">
                {session.user.name}
              </span>
              <SignOutButton />
            </div>
          ) : (
            <Link href="/login" className="rounded bg-white px-4 py-2 text-sky-900">
              Sign In
            </Link>)}
          </div>
      </div>
    </header>
  );
}
