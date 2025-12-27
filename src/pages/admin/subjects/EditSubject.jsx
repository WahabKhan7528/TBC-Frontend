import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FormInput from '../../../components/admin/FormInput';

const EditSubject = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: 'Operating Systems',
    code: 'CS-312',
    class: 'BSCS - 3rd',
    faculty: 'Prof. Ahmed',
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subject ${id} updated (mock)`);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500">Subject Management</p>
        <h1 className="text-2xl font-semibold text-gray-900">Edit subject {id}</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Subject name" value={form.name} onChange={(v) => handleChange('name', v)} required />
          <FormInput label="Code" value={form.code} onChange={(v) => handleChange('code', v)} required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Class" value={form.class} onChange={(v) => handleChange('class', v)} />
          <FormInput label="Assign faculty" value={form.faculty} onChange={(v) => handleChange('faculty', v)} />
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded-lg border text-sm font-semibold text-gray-700 hover:bg-gray-50" type="button">
            Remove subject
          </button>
          <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSubject;

