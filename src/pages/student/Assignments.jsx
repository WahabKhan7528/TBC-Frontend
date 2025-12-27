import AssignmentCard from '../../components/student/AssignmentCard';

const assignments = [
  {
    title: 'Operating Systems Lab Report',
    subject: 'CS-312',
    description: 'Analyze CPU scheduling strategies with your lab data and submit a 3-page reflection.',
    dueDate: 'Sept 15, 2025',
    attachment: '#',
    status: 'Pending',
  },
  {
    title: 'Database Design Project',
    subject: 'CS-215',
    description: 'Submit ER diagram, relational schema, and sample queries for the bookstore system.',
    dueDate: 'Sept 18, 2025',
    attachment: '#',
    status: 'Submitted',
  },
  {
    title: 'Linear Algebra Problem Set 5',
    subject: 'MTH-205',
    description: 'Complete questions 1-10 focusing on eigenvalues and diagonalization.',
    dueDate: 'Sept 10, 2025',
    attachment: '#',
    status: 'Late',
  },
];

const Assignments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Assignments</p>
          <h1 className="text-2xl font-semibold text-gray-900">Submit coursework</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            {assignments.length} total
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.title} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;

