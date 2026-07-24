'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function NewMeetingPage() {
  const [state, formAction, isPending] =
    useActionState(createMeeting, initialState);

  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Create Meeting
      </h1>

      <form action= {formAction} className="space-y-4">
        <div>
          <label htmlFor="date">Date</label>

          <input
            id="date"
            name="date"
            type="date"
            aria-describedby="date-error"
            required
          />

          <div
            id="date-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="meetingType">
            Meeting Type
          </label>

          <select
            id="meetingType"
            name="meetingType"
            aria-describedby="meetingType-error"
            required
          >
            <option value="">
              Select a meeting type
            </option>
            <option value="regular">Regular</option>
            <option value="testimony">
              Testimony
            </option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>

          <div
            id="meetingType-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="presiding">
            Presiding
          </label>

          <input
            id="presiding"
            name="presiding"
            type="text"
            aria-describedby="presiding-error"
            required
          />

          <div
            id="presiding-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="conducting">
            Conducting
          </label>

          <input
            id="conducting"
            name="conducting"
            type="text"
            aria-describedby="conducting-error"
            required
          />

          <div
            id="conducting-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="announcements">
            Announcements
          </label>

          <textarea
            id="announcements"
            name="announcements"
            rows={3}
            aria-describedby="announcements-error"
          />

          <div
            id="announcements-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="openingHymn">
            Opening Hymn
          </label>

          <input
            id="openingHymn"
            name="openingHymn"
            type="text"
            aria-describedby="openingHymn-error"
            required
          />

          <div
            id="openingHymn-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="openingPrayer">
            Opening Prayer
          </label>

          <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            aria-describedby="openingPrayer-error"
            required
          />

          <div
            id="openingPrayer-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="wardBusiness">
            Ward Business
          </label>

          <textarea
            id="wardBusiness"
            name="wardBusiness"
            rows={3}
            aria-describedby="wardBusiness-error"
          />

          <div
            id="wardBusiness-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="stakeBusiness">
            Stake Business
          </label>

          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="text"
            aria-describedby="stakeBusiness-error"
          />

          <div
            id="stakeBusiness-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="sacramentHymn">
            Sacrament Hymn
          </label>

          <input
            id="sacramentHymn"
            name="sacramentHymn"
            type="text"
            aria-describedby="sacramentHymn-error"
            required
          />

          <div
            id="sacramentHymn-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="speakers">
            Speakers (comma separated)
          </label>

          <input
            id="speakers"
            name="speakers"
            type="text"
            aria-describedby="speakers-error"
            required
          />

          <div
            id="speakers-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="closingHymn">
            Closing Hymn
          </label>

          <input
            id="closingHymn"
            name="closingHymn"
            type="text"
            aria-describedby="closingHymn-error"
            required
          />

          <div
            id="closingHymn-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <div>
          <label htmlFor="closingPrayer">
            Closing Prayer
          </label>

          <input
            id="closingPrayer"
            name="closingPrayer"
            type="text"
            aria-describedby="closingPrayer-error"
            required
          />

          <div
            id="closingPrayer-error"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>

        <button
  type="submit"
  disabled={isPending}
>
  {isPending ? 'Saving...' : 'Create Meeting'}
</button>
      </form>
    </main>
  );
}
