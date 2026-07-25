"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="max-w-4xl mx-auto px-4">
      <ul className="flex gap-6">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-semibold text-yellow-300"
                : "text-white hover:text-yellow-200"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/meetings"
            className={
              pathname === "/meetings"
                ? "font-semibold text-yellow-300"
                : "text-white hover:text-yellow-200"
            }
          >
            Meetings
          </Link>
        </li>
        <li>
          <Link
            href="/meetings/current"
            className={
              pathname === "/meetings/current"
                ? "font-semibold text-yellow-300"
                : "text-white hover:text-yellow-200"
            }
          >
            Current
          </Link>
        </li>
      </ul>
    </nav>
  );
}
