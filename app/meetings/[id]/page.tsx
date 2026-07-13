import { notFound } from "next/navigation";
import { getBaseUrl } from "@/lib/api";
import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";

async function fetchMeeting(
  id: string
): Promise<SacramentMeeting | null> {
  const response = await fetch(
    `${getBaseUrl()}/api/meetings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  return response.json();
}

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meeting = await fetchMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}