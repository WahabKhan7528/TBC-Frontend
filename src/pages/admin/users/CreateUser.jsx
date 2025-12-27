import { useState } from 'react';
import FormInput from '../../../components/admin/FormInput';

const CreateUser = () => {
  const [role, setRole] = useState('Faculty');
  const [form, setForm] = useState({
    name: '',
    email: '',
    id: '',
    department: '',
    subjects: '',
    contact: '',
    password: '',
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User created (mock)');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">User Management</p>
          <h1 className="text-2xl font-semibold text-gray-900">Create user</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="text-sm text-gray-700 space-y-1">
            Role
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option>Admin</option>
              <option>Faculty</option>
              <option>Student</option>
            </select>
          </label>
          <FormInput label="Name" value={form.name} onChange={(v) => handleChange('name', v)} required />
          <FormInput label="Email" type="email" value={form.email} onChange={(v) => handleChange('email', v)} required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="User ID" value={form.id} onChange={(v) => handleChange('id', v)} helper="Admin ID / Faculty ID / Student ID" />
          <FormInput label="Department / Class" value={form.department} onChange={(v) => handleChange('department', v)} />
          <FormInput label="Section (students)" value={form.section} onChange={(v) => handleChange('section', v)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Subjects (faculty)" value={form.subjects} onChange={(v) => handleChange('subjects', v)} placeholder="OS, DBMS" />
          <FormInput label="Contact info" value={form.contact} onChange={(v) => handleChange('contact', v)} placeholder="+92-xxx" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Password" type="password" value={form.password} onChange={(v) => handleChange('password', v)} helper="Leave blank to auto-generate" />
          <FormInput label="Confirm password" type="password" value={form.confirmPassword} onChange={(v) => handleChange('confirmPassword', v)} />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
            Save user
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

