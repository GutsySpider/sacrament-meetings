import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

async function getMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(
    "https://sacrament-meetings-lrrdwtr69-wdd-434.vercel.app/api/meetings",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        All Meetings
      </h1>

      <div className="grid gap-4">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </div>
  );
}