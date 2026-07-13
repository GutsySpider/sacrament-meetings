// import { getBaseUrl } from "@/lib/api";
import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";

async function fetchMeetings(): Promise<SacramentMeeting[]> {
  const host = (await headers()).get("host");

  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";

  const response = await fetch(
    `${protocol}://${host}/api/meetings`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch meetings: ${response.status}`
    );
    }
    

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