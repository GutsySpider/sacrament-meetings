import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";

async function fetchMeeting(
  id: string
): Promise<SacramentMeeting | null> {
  const host = (await headers()).get("host");

  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";

  const response = await fetch(
    `${protocol}://${host}/api/meetings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch meeting: ${response.status}`
    );
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