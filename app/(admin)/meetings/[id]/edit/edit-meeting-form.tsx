'use client';

import { useActionState } from 'react';
import { updateMeeting, type State } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: State = {
  message: null,
  errors: {},
};

export default function EditMeetingForm({
  meeting,
}: {
        meeting: SacramentMeeting;
    }

) {
  const [state, formAction, isPending] =
    useActionState(
      updateMeeting.bind(null, meeting.id),
      initialState
    );

  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Meeting
      </h1>

      <form action={formAction}>
  <div>
    <label htmlFor="date" className="mb-2 block text-sm font-medium text-slate-700">
      Date
    </label>
    <input
      id="date"
      name="date"
      type="date"
      defaultValue={meeting.date}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="date-error"
      required
    />
    <div id="date-error" aria-live="polite">
      {state.errors?.date?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="meetingType" className="mb-2 block text-sm font-medium text-slate-700">
      Meeting Type
    </label>
    <select
      id="meetingType"
      name="meetingType"
      defaultValue={meeting.meetingType}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="meetingType-error"
    >
      <option value="regular">Regular</option>
      <option value="testimony">Testimony</option>
      <option value="stake">Stake</option>
      <option value="general">General</option>
    </select>

    <div id="meetingType-error" aria-live="polite">
      {state.errors?.meetingType?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="presiding" className="mb-2 block text-sm font-medium">
      Presiding
    </label>
    <input
      id="presiding"
      name="presiding"
      type="text"
      defaultValue={meeting.presiding}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="presiding-error"
      required
    />
    <div id="presiding-error" aria-live="polite">
      {state.errors?.presiding?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="conducting" className="mb-2 block text-sm font-medium">
      Conducting
    </label>
    <input
      id="conducting"
      name="conducting"
      type="text"
      defaultValue={meeting.conducting}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="conducting-error"
      required
    />
    <div id="conducting-error" aria-live="polite">
      {state.errors?.conducting?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="announcements" className="mb-2 block text-sm font-medium">
      Announcements
    </label>
    <textarea
      id="announcements"
      name="announcements"
      rows={3}
      defaultValue={meeting.announcements?.join(', ')}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="announcements-error"
    />
    <div id="announcements-error" aria-live="polite">
      {state.errors?.announcements?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

              <div>
  <label
    htmlFor="wardBusiness"
    className="mb-2 block text-sm font-medium"
  >
    Ward Business
  </label>

  <textarea
    id="wardBusiness"
    name="wardBusiness"
    rows={3}
    defaultValue={
  Array.isArray(meeting.wardBusiness)
    ? meeting.wardBusiness
        .map((item) => item.description)
        .join(', ')
    : ''
}
    className="block w-full rounded-md border border-slate-300 px-3 py-2"
    aria-describedby="wardBusiness-error"
  />

  <div
    id="wardBusiness-error"
    aria-live="polite"
    aria-atomic="true"
  >
    {state.errors?.wardBusiness?.map((error) => (
      <p
        key={error}
        className="mt-1 text-sm text-red-600"
      >
        {error}
      </p>
    ))}
  </div>
              </div>
              
<div>
  <label
    htmlFor="stakeBusiness"
    className="mb-2 block text-sm font-medium"
  >
    Stake Business
  </label>

  <select
    id="stakeBusiness"
    name="stakeBusiness"
    defaultValue={String(meeting.stakeBusiness)}
    className="block w-full rounded-md border border-slate-300 px-3 py-2"
    aria-describedby="stakeBusiness-error"
  >
    <option value="false">No</option>
    <option value="true">Yes</option>
  </select>

  <div
    id="stakeBusiness-error"
    aria-live="polite"
    aria-atomic="true"
  >
    {state.errors?.stakeBusiness?.map((error) => (
      <p
        key={error}
        className="mt-1 text-sm text-red-600"
      >
        {error}
      </p>
    ))}
  </div>
              </div>
              
  <div>
    <label htmlFor="openingHymn" className="mb-2 block text-sm font-medium">
      Opening Hymn
    </label>
    <input
      id="openingHymn"
      name="openingHymn"
      type="text"
      defaultValue={meeting.openingHymn?.title}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="openingHymn-error"
      required
    />
    <div id="openingHymn-error" aria-live="polite">
      {state.errors?.openingHymn?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="openingPrayer" className="mb-2 block text-sm font-medium">
      Opening Prayer
    </label>
    <input
      id="openingPrayer"
      name="openingPrayer"
      type="text"
      defaultValue={meeting.openingPrayer}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="openingPrayer-error"
      required
    />
    <div id="openingPrayer-error" aria-live="polite">
      {state.errors?.openingPrayer?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="sacramentHymn" className="mb-2 block text-sm font-medium">
      Sacrament Hymn
    </label>
    <input
      id="sacramentHymn"
      name="sacramentHymn"
      type="text"
      defaultValue={meeting.sacramentHymn?.title}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="sacramentHymn-error"
      required
    />
    <div id="sacramentHymn-error" aria-live="polite">
      {state.errors?.sacramentHymn?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="speakers" className="mb-2 block text-sm font-medium">
      Speakers (comma separated)
    </label>
    <input
      id="speakers"
      name="speakers"
      type="text"
      defaultValue={
  Array.isArray(meeting.speakers)
    ? meeting.speakers
        .map((s) => s.name)
        .join(', ')
    : ''
}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="speakers-error"
      required
    />
    <div id="speakers-error" aria-live="polite">
      {state.errors?.speakers?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="closingHymn" className="mb-2 block text-sm font-medium">
      Closing Hymn
    </label>
    <input
      id="closingHymn"
      name="closingHymn"
      type="text"
      defaultValue={meeting.closingHymn?.title}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="closingHymn-error"
      required
    />
    <div id="closingHymn-error" aria-live="polite">
      {state.errors?.closingHymn?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <label htmlFor="closingPrayer" className="mb-2 block text-sm font-medium">
      Closing Prayer
    </label>
    <input
      id="closingPrayer"
      name="closingPrayer"
      type="text"
      defaultValue={meeting.closingPrayer}
      className="block w-full rounded-md border border-slate-300 px-3 py-2"
      aria-describedby="closingPrayer-error"
      required
    />
    <div id="closingPrayer-error" aria-live="polite">
      {state.errors?.closingPrayer?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ))}
    </div>
  </div>

  {state.message && (
    <p className="text-sm text-red-600">
      {state.message}
    </p>
  )}

  <button
    type="submit"
    disabled={isPending}
    className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {isPending ? 'Saving...' : 'Save Changes'}
  </button>
</form>
    </main>
  );
}