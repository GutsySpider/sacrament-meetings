"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  addMeeting,
  updateMeetingById,
  deleteMeetingById,
} from "./meetings-db";

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymn?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymn?: string[];
    speakers?: string[];
    closingHymn?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

const MeetingFormSchema = z.object({
  date: z.string().min(1),

  meetingType: z.enum(["testimony", "regular", "stake", "general"]),

  presiding: z.string().min(2),
  conducting: z.string().min(2),

  announcements: z.string().optional(),

  openingHymn: z.string().min(1),
  openingPrayer: z.string().min(2),

  wardBusiness: z.string().optional(),
  stakeBusiness: z.string().optional(),

  sacramentHymn: z.string().min(1),

  speakers: z.string(),

  closingHymn: z.string().min(1),
  closingPrayer: z.string().min(2),
});

function hymnFromTitle(title: string) {
  return {
    number: 0,
    title,
  };
}

export async function createMeeting(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const parsed = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    announcements: formData.get("announcements"),
    openingHymn: formData.get("openingHymn"),
    openingPrayer: formData.get("openingPrayer"),
    wardBusiness: formData.get("wardBusiness"),
    stakeBusiness: formData.get("stakeBusiness"),
    sacramentHymn: formData.get("sacramentHymn"),
    speakers: formData.get("speakers"),
    closingHymn: formData.get("closingHymn"),
    closingPrayer: formData.get("closingPrayer"),
  });

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error);

    return {
      errors: fieldErrors.fieldErrors,
      message: "Please correct the highlighted fields.",
    };
  }

  try {
    await addMeeting({
      date: parsed.data.date,
      meetingType: parsed.data.meetingType,
      presiding: parsed.data.presiding,
      conducting: parsed.data.conducting,

      announcements: parsed.data.announcements
        ? [parsed.data.announcements]
        : [],

      openingHymn: hymnFromTitle(parsed.data.openingHymn),

      openingPrayer: parsed.data.openingPrayer,

      wardBusiness: parsed.data.wardBusiness
        ? [{ description: parsed.data.wardBusiness }]
        : [],

      stakeBusiness: parsed.data.stakeBusiness === "true",

      sacramentHymn: hymnFromTitle(parsed.data.sacramentHymn),

      speakers: parsed.data.speakers
        .split(",")
        .map((speaker) => ({
          name: speaker.trim(),
          topic: "",
          type: "speaker" as const,
        }))
        .filter((speaker) => speaker.name.length > 0),

      closingHymn: hymnFromTitle(parsed.data.closingHymn),

      closingPrayer: parsed.data.closingPrayer,
    });
  } catch (error) {
    console.error("Error creating meeting:", error);

    throw new Error("Failed to create meeting. Please try again later.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const parsed = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    announcements: formData.get("announcements"),
    openingHymn: formData.get("openingHymn"),
    openingPrayer: formData.get("openingPrayer"),
    wardBusiness: formData.get("wardBusiness"),
    stakeBusiness: formData.get("stakeBusiness"),
    sacramentHymn: formData.get("sacramentHymn"),
    speakers: formData.get("speakers"),
    closingHymn: formData.get("closingHymn"),
    closingPrayer: formData.get("closingPrayer"),
  });

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error);

    return {
      errors: fieldErrors.fieldErrors,
      message: "Please correct the highlighted fields.",
    };
  }

  try {
    await updateMeetingById(id, {
      date: parsed.data.date,
      meetingType: parsed.data.meetingType,
      presiding: parsed.data.presiding,
      conducting: parsed.data.conducting,

      announcements: parsed.data.announcements
        ? [parsed.data.announcements]
        : [],

      openingHymn: hymnFromTitle(parsed.data.openingHymn),

      openingPrayer: parsed.data.openingPrayer,

      wardBusiness: parsed.data.wardBusiness
        ? [{ description: parsed.data.wardBusiness }]
        : [],

      stakeBusiness: parsed.data.stakeBusiness === "true",

      sacramentHymn: hymnFromTitle(parsed.data.sacramentHymn),

      speakers: parsed.data.speakers
        .split(",")
        .map((speaker) => ({
          name: speaker.trim(),
          topic: "",
          type: "speaker" as const,
        }))
        .filter((speaker) => speaker.name.length > 0),

      closingHymn: hymnFromTitle(parsed.data.closingHymn),

      closingPrayer: parsed.data.closingPrayer,
    });
  } catch (error) {
    console.error("Error updating meeting:", error);

    throw new Error("Failed to update meeting. Please try again later.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function deleteMeeting(formData: FormData) {
  const id = Number(formData.get("id"));

  try {
    await deleteMeetingById(id);
  } catch (error) {
    console.error("Error deleting meeting:", error);

    throw new Error("Failed to delete meeting. Please try again later.");
  }

  revalidatePath("/meetings");
}
