import { Link } from 'react-router-dom';
import Table from '../../../components/admin/Table';

const columns = [
  { key: 'title', label: 'Course' },
  { key: 'duration', label: 'Duration' },
  { key: 'eligibility', label: 'Eligibility' },
  { key: 'fee', label: 'Fee' },
];

const data = [
  { id: 'c101', title: 'BS Computer Science', duration: '4 years', eligibility: 'Intermediate', fee: '$1200/semester' },
  { id: 'c102', title: 'BS Information Technology', duration: '4 years', eligibility: 'Intermediate', fee: '$1100/semester' },
];

const CourseList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Courses (Public Site)</p>
          <h1 className="text-2xl font-semibold text-gray-900">Manage course list</h1>
        </div>
        <Link
          to="/admin/courses/create"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800"
        >
          Add Course
        </Link>
      </div>

      <Table
        columns={columns}
        data={data}
        actions={(row) => (
          <div className="flex items-center gap-2 text-sm">
            <Link to={`/admin/courses/edit/${row.id}`} className="text-purple-700 font-semibold hover:text-purple-800">
              Edit
            </Link>
            <button className="text-rose-600 hover:text-rose-700">Delete</button>
          </div>
        )}
      />
    </div>
  );
};

export default CourseList;

