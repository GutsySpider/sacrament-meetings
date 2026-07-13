import { getBaseUrl } from "@/lib/api";
import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

async function fetchMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(
    `${getBaseUrl()}/api/meetings`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await fetchMeetings();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
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