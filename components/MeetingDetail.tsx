import { SacramentMeeting } from "@/lib/types";

type Props = {
  meeting: SacramentMeeting;
};

export default function MeetingDetail({ meeting }: Props) {
  return (
    <div className="card space-y-6">
      <h1 className="text-3xl font-bold">Sacrament Meeting Agenda</h1>

      <div>
        <p>
          <strong>Date:</strong> {meeting.date}
        </p>
        <p>
          <strong>Presiding:</strong> {meeting.presiding}
        </p>
        <p>
          <strong>Conducting:</strong> {meeting.conducting}
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Opening</h2>

        <p>
          Hymn #{meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>

        <p>Prayer: {meeting.openingPrayer}</p>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Ward Business</h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc pl-5">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}
      </div>

      <div>
        <h2 className="font-semibold text-xl">Sacrament</h2>

        <p>
          Hymn #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Speakers & Music</h2>

        <ul className="space-y-2">
          {meeting.speakers.map((speaker, index) => (
            <li key={index}>
              <strong>{speaker.name}</strong>

              {speaker.topic && <span> — {speaker.topic}</span>}

              <span className="ml-2 text-sm text-gray-500">
                ({speaker.type})
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Closing</h2>

        <p>
          Hymn #{meeting.closingHymn.number} - {meeting.closingHymn.title}
        </p>

        <p>Prayer: {meeting.closingPrayer}</p>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Announcements</h2>

        <ul className="list-disc pl-5">
          {(meeting.announcements ?? []).map((announcement, index) => (
            <li key={index}>{announcement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
