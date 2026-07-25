import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";
import Link from "next/link";
import { deleteMeeting } from "@/lib/actions";

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <main><MeetingDetail meeting={meeting} />
      
      <div className="mt-8 flex gap-4">
        <Link href="/meetings" className="border-gray-300 px-4 py-2 hover:bg-gray-100">
          Return to Meetings
        </Link>

        <Link href={`/meetings/${meeting.id}/edit`} className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
          Edit Meeting
        </Link>
        <form action={deleteMeeting}>
        <input
          type="hidden"
          name="id"
          value={meeting.id}
        />
        <button
          type="submit"
          className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >Delete Meeting</button>
        </form>
      </div>
      
    </main>
    
    

  );
}


