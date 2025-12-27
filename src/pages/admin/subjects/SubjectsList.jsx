import { Link } from 'react-router-dom';
import Table from '../../../components/admin/Table';

const columns = [
  { key: 'name', label: 'Subject' },
  { key: 'code', label: 'Code' },
  { key: 'class', label: 'Class' },
  { key: 'faculty', label: 'Faculty' },
];

const data = [
  { id: 's1', name: 'Operating Systems', code: 'CS-312', class: 'BSCS - 3rd', faculty: 'Prof. Ahmed' },
  { id: 's2', name: 'Database Systems', code: 'CS-215', class: 'BSCS - 3rd', faculty: 'Prof. Sara' },
  { id: 's3', name: 'Linear Algebra', code: 'MTH-205', class: 'BSCS - 3rd', faculty: 'Prof. Bilal' },
];

const SubjectsList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Subject Management</p>
          <h1 className="text-2xl font-semibold text-gray-900">Subjects & assignments</h1>
        </div>
        <Link
          to="/admin/subjects/create"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800"
        >
          Add Subject
        </Link>
      </div>

      <Table
        columns={columns}
        data={data}
        actions={(row) => (
          <div className="flex items-center gap-2 text-sm">
            <Link to={`/admin/subjects/edit/${row.id}`} className="text-purple-700 font-semibold hover:text-purple-800">
              Edit
            </Link>
            <button className="text-rose-600 hover:text-rose-700">Delete</button>
          </div>
        )}
      />
    </div>
  );
};

export default SubjectsList;

