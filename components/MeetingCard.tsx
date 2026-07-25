import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";
import { deleteMeeting } from "@/lib/actions";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
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

      <div className="mt-4 flex gap-3">
        <Link
          href={`/meetings/${meeting.id}`}
        className="text-blue-600 hover:underline"
        >
          View
        </Link>
      
        <Link
          href={`/meetings/${meeting.id}/edit`}
              className="text-green-600 hover:underline"
        >
          Edit
        </Link>

        <form action={deleteMeeting}>
          <input type="hidden" name="id" value={meeting.id} />

          <button type="submit" className="text-red-600 hover:underline">
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}
