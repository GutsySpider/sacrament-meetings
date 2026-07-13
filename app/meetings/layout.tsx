import Link from "next/link";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="mb-6 border-b pb-4">
        <ul className="flex gap-6">
                  <li>
                      <Link href="/meetings">
            All Meetings</Link>
          </li>
                  <li>
                      <Link href="/meetings/current">
              Current Meeting
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}