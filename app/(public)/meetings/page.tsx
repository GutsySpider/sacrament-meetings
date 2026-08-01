import MeetingCard from "@/components/MeetingCard";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ridgecrest Ward Sacrament Meeting Planner home page.",
};

interface MeetingsPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const params = await searchParams;

  const query = params?.query ?? "";
  const page = Number(params?.page) || 1;

  const meetings = await getMeetings(query, page);
  const totalPages = await getMeetingsTotalPages(query);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Meetings</h1>

      <Link href="/meetings/new" className="rounded bg-sky-900 pd-5 mg-5 px-4 text-white ">Add New Meeting</Link>

      <div className="mb-6">
        <MeetingSearch />
      </div>

      <div className="grid gap-4">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>

      <div className="mt-6">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
