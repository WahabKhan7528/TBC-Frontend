import { Link } from 'react-router-dom';
import Table from '../../../components/admin/Table';

const columns = [
  { key: 'name', label: 'Class' },
  { key: 'sections', label: 'Sections' },
  { key: 'subjects', label: 'Subjects' },
  { key: 'faculty', label: 'Assigned Faculty' },
];

const data = [
  { id: 'c1', name: 'BSCS - 3rd Semester', sections: 'A, B', subjects: 'OS, DBMS, DSA', faculty: 'Ahmed, Sara' },
  { id: 'c2', name: 'BSIT - 2nd Semester', sections: 'A', subjects: 'Programming, Discrete Math', faculty: 'Bilal' },
];

const ClassesList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Class Management</p>
          <h1 className="text-2xl font-semibold text-gray-900">Classes & sections</h1>
        </div>
        <Link
          to="/admin/classes/create"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800"
        >
          Create Class
        </Link>
      </div>

      <Table
        columns={columns}
        data={data}
        actions={(row) => (
          <div className="flex items-center gap-2 text-sm">
            <Link to={`/admin/classes/edit/${row.id}`} className="text-purple-700 font-semibold hover:text-purple-800">
              Edit
            </Link>
            <button className="text-rose-600 hover:text-rose-700">Delete</button>
          </div>
        )}
      />
    </div>
  );
};

export default ClassesList;

