import AnnouncementCard from '../../components/student/AnnouncementCard';

const announcements = [
  {
    title: 'Mid-term examination schedule released',
    date: 'Sept 12, 2025',
    description: 'Check the examinations tab for detailed timetable, room allocations, and allowed materials.',
  },
  {
    title: 'AI Club workshop: Building with LangChain',
    date: 'Sept 15, 2025',
    description: 'Hands-on session this Friday 3 PM in Lab 4. Seats are limited—register via the portal.',
  },
  {
    title: 'Library extends weekend hours',
    date: 'Sept 10, 2025',
    description: 'The central library will remain open until 10 PM on Saturdays and Sundays for the semester.',
  },
];

const News = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500">News & Events</p>
        <h1 className="text-2xl font-semibold text-gray-900">Announcements from Admin</h1>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.title} announcement={announcement} />
        ))}
      </div>
    </div>
  );
};

export default News;

