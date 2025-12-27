import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FormInput from '../../../components/admin/FormInput';

const EditCourse = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: 'BS Computer Science',
    duration: '4 years',
    eligibility: 'Intermediate',
    fee: '$1200/semester',
    description: 'A four-year program focusing on computing fundamentals.',
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course ${id} updated (mock)`);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500">Courses (Public Site)</p>
        <h1 className="text-2xl font-semibold text-gray-900">Edit course {id}</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <FormInput label="Course title" value={form.title} onChange={(v) => handleChange('title', v)} required />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="Duration" value={form.duration} onChange={(v) => handleChange('duration', v)} />
          <FormInput label="Eligibility" value={form.eligibility} onChange={(v) => handleChange('eligibility', v)} />
          <FormInput label="Fee information" value={form.fee} onChange={(v) => handleChange('fee', v)} />
        </div>
        <label className="text-sm text-gray-700 space-y-1 block">
          Description
          <textarea
            value={form.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </label>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded-lg border text-sm font-semibold text-gray-700 hover:bg-gray-50" type="button">
            Delete course
          </button>
          <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;

