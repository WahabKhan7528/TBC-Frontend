import { Link } from 'react-router-dom';
import {
  ClipboardList,
  FolderOpen,
  Megaphone,
  BarChart3,
  PlusCircle,
  Users,
  BookOpen,
} from 'lucide-react';

const faculty = {
  name: 'Prof. Ahmed Raza',
  department: 'Computer Science',
  subjects: ['Operating Systems', 'Database Systems', 'Linear Algebra'],
  totalClasses: 4,
};

const quickActions = [
  { title: 'Create Assignment', icon: PlusCircle, path: '/faculty/assignments/create', color: 'bg-purple-50 text-purple-700' },
  { title: 'Upload Material', icon: FolderOpen, path: '/faculty/materials/upload', color: 'bg-blue-50 text-blue-700' },
  { title: 'View Submissions', icon: ClipboardList, path: '/faculty/assignments', color: 'bg-emerald-50 text-emerald-700' },
  { title: 'Announcements', icon: Megaphone, path: '/faculty/announcements', color: 'bg-amber-50 text-amber-700' },
];

const teachingLoad = [
  { subject: 'Operating Systems', classSection: 'BSCS - A', students: 42 },
  { subject: 'Database Systems', classSection: 'BSCS - B', students: 38 },
  { subject: 'Linear Algebra', classSection: 'BSCS - A', students: 40 },
];

const recentAnnouncements = [
  { title: 'Mid-term exam instructions', date: 'Sept 12, 2025' },
  { title: 'Project milestone feedback posted', date: 'Sept 10, 2025' },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Faculty Dashboard</p>
          <h1 className="text-2xl font-semibold text-gray-900 mt-1">{faculty.name}</h1>
          <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">
              {faculty.department}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700">
              {faculty.totalClasses} classes
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Teaching: {faculty.subjects.join(', ')}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm text-gray-500">Active students</p>
            <p className="text-2xl font-bold text-gray-900">120</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center text-lg font-semibold">
            92%
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.title}
              to={action.path}
              className="bg-white border rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center`}>
                <Icon size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{action.title}</h3>
              <p className="text-sm text-gray-600">Quick access</p>
            </Link>
          );
        })}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Teaching load</h2>
            <Link to="/faculty/assignments" className="text-sm text-purple-700 font-semibold hover:text-purple-800">
              Manage assignments
            </Link>
          </div>
          <div className="space-y-3">
            {teachingLoad.map((item) => (
              <div key={item.subject} className="border rounded-xl p-4 flex items-center justify-between hover:border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.subject}</p>
                    <p className="text-xs text-gray-500">{item.classSection}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                  {item.students} students
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent announcements</h2>
            <Link to="/faculty/announcements" className="text-sm text-purple-700 font-semibold hover:text-purple-800">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {recentAnnouncements.map((item) => (
              <div key={item.title} className="border rounded-xl p-4 flex items-center gap-3 hover:border-amber-200">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Megaphone size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border rounded-2xl shadow-sm p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Class overview</h2>
          <Link to="/faculty/results" className="text-sm text-purple-700 font-semibold hover:text-purple-800">
            See performance
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Users size={18} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average attendance</p>
              <p className="text-lg font-semibold text-gray-900">89%</p>
            </div>
          </div>
          <div className="border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <BarChart3 size={18} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg assignment score</p>
              <p className="text-lg font-semibold text-gray-900">82%</p>
            </div>
          </div>
          <div className="border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <ClipboardList size={18} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending grading</p>
              <p className="text-lg font-semibold text-gray-900">6 submissions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

