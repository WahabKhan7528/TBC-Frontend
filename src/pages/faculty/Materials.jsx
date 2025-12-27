import { Link } from 'react-router-dom';
import MaterialCard from '../../components/faculty/MaterialCard';

const materials = [
  {
    id: 'm1',
    classSection: 'BSCS - A',
    subject: 'Operating Systems',
    title: 'Lecture 07 Slides',
    type: 'Slides',
    uploadDate: 'Sept 11, 2025',
    link: '#',
  },
  {
    id: 'm2',
    classSection: 'BSCS - B',
    subject: 'Database Systems',
    title: 'Normalization Cheatsheet',
    type: 'PDF',
    uploadDate: 'Sept 10, 2025',
    link: '#',
  },
  {
    id: 'm3',
    classSection: 'BSCS - A',
    subject: 'Operating Systems',
    title: 'Lab Demo Recording',
    type: 'Video',
    uploadDate: 'Sept 9, 2025',
    link: '#',
  },
];

const Materials = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Course Materials</p>
          <h1 className="text-2xl font-semibold text-gray-900">Uploaded resources</h1>
        </div>
        <Link
          to="/faculty/materials/upload"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800"
        >
          Upload Material
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default Materials;

