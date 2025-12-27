import { Link } from 'react-router-dom';
import AssignmentCard from '../../components/faculty/AssignmentCard';

const assignments = [
  {
    id: 'a1',
    title: 'CPU Scheduling Report',
    description: 'Analyze FCFS vs SJF using your lab data and provide charts.',
    dueDate: 'Sept 18, 2025',
    attachment: '#',
    classSection: 'BSCS - A',
    subject: 'Operating Systems',
    maxMarks: 20,
  },
  {
    id: 'a2',
    title: 'ER Diagram for Library',
    description: 'Submit ERD + relational schema with keys and constraints.',
    dueDate: 'Sept 20, 2025',
    attachment: '#',
    classSection: 'BSCS - B',
    subject: 'Database Systems',
    maxMarks: 25,
  },
  {
    id: 'a3',
    title: 'Matrix Factorization Set',
    description: 'Problem set on eigen decomposition and SVD.',
    dueDate: 'Sept 14, 2025',
    attachment: '#',
    classSection: 'BSCS - A',
    subject: 'Linear Algebra',
    maxMarks: 15,
  },
];

const Assignments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Assignments</p>
          <h1 className="text-2xl font-semibold text-gray-900">Manage & publish</h1>
        </div>
        <Link
          to="/faculty/assignments/create"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800"
        >
          Create Assignment
        </Link>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;

