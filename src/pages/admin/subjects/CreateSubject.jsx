import { useState } from 'react';
import FormInput from '../../../components/admin/FormInput';

const CreateSubject = () => {
  const [form, setForm] = useState({
    name: '',
    code: '',
    class: '',
    faculty: '',
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subject created (mock)');
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500">Subject Management</p>
        <h1 className="text-2xl font-semibold text-gray-900">Create subject</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Subject name" value={form.name} onChange={(v) => handleChange('name', v)} required />
          <FormInput label="Code" value={form.code} onChange={(v) => handleChange('code', v)} placeholder="CS-312" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Class" value={form.class} onChange={(v) => handleChange('class', v)} placeholder="BSCS - 3rd" />
          <FormInput label="Assign faculty" value={form.faculty} onChange={(v) => handleChange('faculty', v)} />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
            Save subject
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSubject;

