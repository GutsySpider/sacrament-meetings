import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
      <h3 className="text-xl font-bold mb-2">
        {new Date(meeting.date).toLocaleDateString()}
      </h3>

      <p className="text-gray-700 mb-3">
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <p className="text-gray-700 mb-3">
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Meeting Type:</strong> {meeting.meetingType}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Speakers:</strong> {meeting.speakers.length}
      </p>

      <p className="mt-3">
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-blue-600 hover:underline"> View Agenda </Link> </p>
    </article>
  );
}