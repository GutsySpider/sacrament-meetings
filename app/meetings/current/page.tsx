import { redirect } from "next/navigation";
import { meetings } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  const today = new Date();

  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const sundayString = sunday.toISOString().split("T")[0];

  const meeting = meetings.find(
    (m) => m.date === sundayString
  );

  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  }

  redirect("/meetings");
}