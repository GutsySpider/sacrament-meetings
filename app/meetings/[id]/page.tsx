import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";

async function getMeeting(
  id: string
): Promise<SacramentMeeting | null> {
  const response = await fetch(
    `https://sacrament-meetings-lrrdwtr69-wdd-434.vercel.app/api/meetings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load meeting");
  }

  return response.json();
}

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}