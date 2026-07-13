import type { SacramentMeeting } from './types';

export const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Anderson',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Clark',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Brother Miller', topic: 'The Power of Prayer', type: 'speaker' },
      { name: 'Sister Johnson', topic: 'Finding Peace Through Scripture Study', type: 'speaker' }
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Sister Hall',
    announcements: ['Ward temple night this evening']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 98, title: 'I Need Thee Every Hour' },
    openingPrayer: 'Sister Green',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Brother White', topic: 'Ministering Like the Savior', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' },
      { name: 'Sister Taylor', topic: 'Service and Charity', type: 'speaker' }
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Brother Lewis',
    announcements: ['Stake service project: May 23']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Anderson',
    openingHymn: { number: 304, title: 'Teach Me to Walk in the Light' },
    openingPrayer: 'Sister Adams',
    wardBusiness: [{ description: 'Release of assistant ward clerk' }],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Brother Young', topic: 'Strengthening Families', type: 'speaker' },
      { name: 'Sister Martinez', topic: 'Teaching Children the Gospel', type: 'speaker' }
    ],
    closingHymn: { number: 301, title: 'I Am a Child of God' },
    closingPrayer: 'Brother Walker',
    announcements: ['Primary activity: May 30']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Nelson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 177, title: 'Tis Sweet to Sing the Matchless Love' },
    speakers: [],
    closingHymn: { number: 124, title: 'Be Still, My Soul' },
    closingPrayer: 'Brother Peterson',
    announcements: ['Fast offering assistance available through bishopric']
  },
  {
    id: 6,
    date: '2026-06-07',
    meetingType: 'regular',
    presiding: 'President Wilson',
    conducting: 'Brother Anderson',
    openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
    openingPrayer: 'Brother Evans',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 183, title: 'In Remembrance' },
    speakers: [
      { name: 'Stake Presidency Representative', topic: 'Gathering Israel', type: 'speaker' },
      { name: 'Sister Roberts', topic: 'Covenant Discipleship', type: 'speaker' }
    ],
    closingHymn: { number: 264, title: 'Hark, All Ye Nations!' },
    closingPrayer: 'Sister King',
    announcements: ['Stake conference next weekend']
  },
  {
    id: 7,
    date: '2026-07-12',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 239, title: 'Choose the Right' },
    openingPrayer: 'Sister Baker',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 196, title: 'Jesus, Once of Humble Birth' },
    speakers: [
      { name: 'Youth Speaker - Emma Reed', topic: 'Courage to Follow Christ', type: 'speaker' },
      { name: 'Youth Speaker - Noah Reed', topic: 'Daily Scripture Study', type: 'speaker' }
    ],
    closingHymn: { number: 240, title: 'Know This, That Every Soul Is Free' },
    closingPrayer: 'Brother Scott',
    announcements: ['Youth conference registration due June 20']
  },
  {
    id: 8,
    date: '2026-06-21',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Anderson',
    openingHymn: { number: 100, title: 'Nearer, My God, to Thee' },
    openingPrayer: 'Brother Hernandez',
    wardBusiness: [{ description: 'Sustaining new elders quorum instructor' }],
    stakeBusiness: false,
    sacramentHymn: { number: 187, title: 'God Loved Us, So He Sent His Son' },
    speakers: [
      { name: 'Sister Garcia', topic: 'The Atonement of Jesus Christ', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 193, title: 'I Stand All Amazed' },
    closingPrayer: 'Sister Moore',
    announcements: ['Ward picnic: June 27']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}
