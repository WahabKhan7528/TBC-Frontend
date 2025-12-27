import { useState } from 'react';
import FormInput from '../../../components/admin/FormInput';

const CreateClass = () => {
  const [form, setForm] = useState({
    name: '',
    sections: '',
    subjects: '',
    faculty: '',
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Class created (mock)');
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500">Class Management</p>
        <h1 className="text-2xl font-semibold text-gray-900">Create class</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <FormInput label="Class name" value={form.name} onChange={(v) => handleChange('name', v)} placeholder="BSCS - 3rd Semester" required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Sections" value={form.sections} onChange={(v) => handleChange('sections', v)} placeholder="A, B, C" />
          <FormInput label="Subjects" value={form.subjects} onChange={(v) => handleChange('subjects', v)} placeholder="OS, DBMS, DSA" />
        </div>
        <FormInput label="Assign faculty" value={form.faculty} onChange={(v) => handleChange('faculty', v)} placeholder="Prof. Ahmed Raza" />

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
            Save class
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClass;

