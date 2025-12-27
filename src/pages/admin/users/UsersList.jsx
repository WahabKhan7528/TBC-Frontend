import { Link } from 'react-router-dom';
import Table from '../../../components/admin/Table';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'id', label: 'ID' },
  { key: 'department', label: 'Department/Class' },
];

const data = [
  { id: 'U-001', name: 'System Admin', email: 'admin@best.edu', role: 'Admin', department: 'Administration' },
  { id: 'F-102', name: 'Prof. Ahmed Raza', email: 'ahmed.raza@best.edu', role: 'Faculty', department: 'CS' },
  { id: 'S-220', name: 'Ayesha Khan', email: 'ayesha.khan@best.edu', role: 'Student', department: 'BSCS-5A' },
];

const UsersList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">User Management</p>
          <h1 className="text-2xl font-semibold text-gray-900">Admins, Faculty, Students</h1>
        </div>
        <Link
          to="/admin/users/create"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800"
        >
          Create User
        </Link>
      </div>

      <Table
        columns={columns}
        data={data}
        actions={(row) => (
          <div className="flex items-center gap-2 text-sm">
            <Link to={`/admin/users/edit/${row.id}`} className="text-purple-700 font-semibold hover:text-purple-800">
              Edit
            </Link>
            <button className="text-rose-600 hover:text-rose-700">Disable</button>
          </div>
        )}
      />
    </div>
  );
};

export default UsersList;

