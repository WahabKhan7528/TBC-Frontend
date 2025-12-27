import {
  Users,
  ClipboardList,
  FileText,
  BarChart3,
  Megaphone,
  Image,
  Layers,
} from 'lucide-react';
import StatsCard from '../../components/admin/StatsCard';
import Table from '../../components/admin/Table';

const stats = [
  { title: 'Total Users', value: '2,430', hint: 'Admins, faculty, students', icon: Users, tone: 'purple' },
  { title: 'Assignments', value: '320', hint: 'Across all classes', icon: ClipboardList, tone: 'blue' },
  { title: 'Submissions', value: '5.4k', hint: 'Student uploads', icon: FileText, tone: 'emerald' },
  { title: 'Active Courses', value: '42', hint: 'Published to LMS', icon: Layers, tone: 'amber' },
];

const lmsRows = [
  { id: '1', metric: 'Class-wise performance', detail: 'Avg 82% across semesters' },
  { id: '2', metric: 'Teacher activity', detail: '18 faculty active this week' },
  { id: '3', metric: 'Student activity', detail: '1.2k logins past 24h' },
  { id: '4', metric: 'Pending grading', detail: '64 submissions awaiting review' },
];

const cmsRows = [
  { id: 'n1', title: 'Convocation 2025', status: 'Published', date: 'Sept 10, 2025' },
  { id: 'n2', title: 'Library upgrade', status: 'Draft', date: 'Sept 8, 2025' },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500">Admin Panel</p>
        <h1 className="text-2xl font-semibold text-gray-900">System overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <StatsCard key={item.title} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">LMS oversight</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">Live</span>
          </div>
          <div className="space-y-3">
            {lmsRows.map((row) => (
              <div key={row.id} className="border rounded-xl p-4 hover:border-purple-200">
                <p className="text-sm font-semibold text-gray-900">{row.metric}</p>
                <p className="text-sm text-gray-600">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">CMS activity</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700">Website</span>
          </div>
          <div className="space-y-3">
            {cmsRows.map((row) => (
              <div key={row.id} className="border rounded-xl p-4 flex items-center justify-between hover:border-blue-200">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{row.title}</p>
                  <p className="text-xs text-gray-500">{row.date}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Teacher-wise activity</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">LMS</span>
          </div>
          <Table
            columns={[
              { key: 'name', label: 'Faculty' },
              { key: 'classes', label: 'Classes' },
              { key: 'assignments', label: 'Assignments' },
              { key: 'submissions', label: 'Submissions' },
            ]}
            data={[
              { id: 'f1', name: 'Prof. Ahmed Raza', classes: 'BSCS-A/B', assignments: '8', submissions: '310' },
              { id: 'f2', name: 'Dr. Sara Imran', classes: 'BSIT-A', assignments: '5', submissions: '180' },
              { id: 'f3', name: 'Prof. Bilal Khan', classes: 'BSCS-C', assignments: '4', submissions: '140' },
            ]}
          />
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">CMS assets</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700">Content</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <StatsCard title="News posts" value="34" hint="Published" icon={Megaphone} tone="purple" />
            <StatsCard title="Gallery images" value="212" hint="Across 9 albums" icon={Image} tone="blue" />
            <StatsCard title="Courses listed" value="26" hint="Website courses" icon={Layers} tone="emerald" />
            <StatsCard title="Drafts" value="7" hint="Pending review" icon={FileText} tone="amber" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

