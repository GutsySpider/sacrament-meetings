'use client';

import { useActionState } from 'react';
import { updateMeeting, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function EditMeetingPage({
  meeting,
}: {
  meeting: {
    id: number;
    date: string;
    conducting: string;
  };
}) {
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

      <form action= {formAction}>
        <div>
          <label htmlFor="date">Date</label>

          <input
            id="date"
            name="date"
            type="date"
            defaultValue={meeting.date}
            aria-describedby="date-error"
            required
          />

          <div
            id="date-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.date?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="conducting">
            Conducting
          </label>

          <input
            id="conducting"
            name="conducting"
            type="text"
            defaultValue={meeting.conducting}
            aria-describedby="conducting-error"
            required
          />

          <div
            id="conducting-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.conducting?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </div>

        {state.message && (
          <p className="text-red-600">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          {isPending ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </main>
  );
}