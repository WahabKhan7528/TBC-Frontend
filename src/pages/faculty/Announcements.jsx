import AnnouncementCard from '../../components/faculty/AnnouncementCard';

const announcements = [
  {
    title: 'Mid-term exam instructions',
    description: 'Bring university ID, only blue/black pens allowed. Calculators permitted for Section B.',
    date: 'Sept 12, 2025',
    classSection: 'BSCS - A',
    attachment: '#',
  },
  {
    title: 'Project milestone feedback posted',
    description: 'Feedback shared on the portal; review comments and update your design docs.',
    date: 'Sept 10, 2025',
    classSection: 'BSCS - B',
  },
  {
    title: 'Guest lecture next week',
    description: 'Industry talk on distributed systems, Tuesday 11 AM, Auditorium 2.',
    date: 'Sept 9, 2025',
    classSection: 'BSCS - A',
  },
];

const Announcements = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Announcements</p>
          <h1 className="text-2xl font-semibold text-gray-900">Class updates</h1>
        </div>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
          Post Announcement (mock)
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.title} announcement={announcement} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;

