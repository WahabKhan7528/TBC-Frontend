import { Link } from 'react-router-dom';
import {
  ClipboardList,
  FolderOpen,
  Megaphone,
  BarChart3,
  CalendarCheck,
  BookOpen,
  FileText,
} from 'lucide-react';

const student = {
  name: 'Ayesha Khan',
  id: 'STU-2025-0145',
  department: 'Computer Science',
  semester: '5th Semester',
};

const quickLinks = [
  {
    title: 'Assignments',
    description: 'View and submit coursework',
    path: '/student/assignments',
    icon: ClipboardList,
    color: 'bg-purple-50 text-purple-700',
  },
  {
    title: 'Materials',
    description: 'Slides, notes, and videos',
    path: '/student/materials',
    icon: FolderOpen,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'News & Events',
    description: 'Campus updates and alerts',
    path: '/student/news',
    icon: Megaphone,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'Results',
    description: 'Marks and transcripts',
    path: '/student/results',
    icon: BarChart3,
    color: 'bg-emerald-50 text-emerald-700',
  },
];

const overview = [
  {
    title: 'Upcoming Assignments',
    value: '3 due this week',
    icon: CalendarCheck,
    color: 'bg-purple-50 text-purple-700',
  },
  {
    title: 'Recently Uploaded Material',
    value: '5 new items',
    icon: BookOpen,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'Announcements',
    value: '2 unread',
    icon: Megaphone,
    color: 'bg-amber-50 text-amber-700',
  },
];

const upcomingAssignments = [
  {
    title: 'Operating Systems Lab Report',
    subject: 'CS-312',
    due: 'Due in 2 days',
  },
  {
    title: 'Linear Algebra Problem Set',
    subject: 'MTH-205',
    due: 'Due in 4 days',
  },
  {
    title: 'Data Mining Presentation',
    subject: 'CS-418',
    due: 'Due in 6 days',
  },
];

const recentMaterial = [
  {
    title: 'Week 7 Lecture Slides',
    subject: 'CS-312',
    date: 'Uploaded today',
  },
  {
    title: 'Probability Notes',
    subject: 'MTH-205',
    date: 'Uploaded yesterday',
  },
  {
    title: 'Database Design Video',
    subject: 'CS-215',
    date: 'Uploaded 2 days ago',
  },
];

const recentAnnouncements = [
  {
    title: 'Mid-term schedule released',
    date: 'Sept 12, 2025',
  },
  {
    title: 'Library hours extended',
    date: 'Sept 10, 2025',
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Student Dashboard</p>
          <h1 className="text-2xl font-semibold text-gray-900 mt-1">
            {student.name}
          </h1>
          <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">
              ID: {student.id}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700">
              {student.department}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700">
              {student.semester}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Overall CGPA</p>
            <p className="text-2xl font-bold text-gray-900">3.68</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center text-lg font-semibold">
            85%
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              to={link.path}
              key={link.title}
              className="bg-white border rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl ${link.color} flex items-center justify-center`}>
                <Icon size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </Link>
          );
        })}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {overview.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-white border rounded-2xl p-4 shadow-sm flex items-center gap-3"
            >
              <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center`}>
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-lg font-semibold text-gray-900">{card.value}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Assignments</h2>
            <Link to="/student/assignments" className="text-sm text-purple-700 font-semibold hover:text-purple-800">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingAssignments.map((item) => (
              <div key={item.title} className="border rounded-xl p-4 flex items-center justify-between hover:border-purple-200">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.subject}</p>
                </div>
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  {item.due}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Material</h2>
            <Link to="/student/materials" className="text-sm text-purple-700 font-semibold hover:text-purple-800">
              Browse
            </Link>
          </div>
          <div className="space-y-3">
            {recentMaterial.map((item) => (
              <div key={item.title} className="border rounded-xl p-4 flex items-center justify-between hover:border-blue-200">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.subject}</p>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Announcements</h2>
          <Link to="/student/news" className="text-sm text-purple-700 font-semibold hover:text-purple-800">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recentAnnouncements.map((item) => (
            <div key={item.title} className="border rounded-xl p-4 flex items-center gap-3 hover:border-amber-200">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <FileText size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

