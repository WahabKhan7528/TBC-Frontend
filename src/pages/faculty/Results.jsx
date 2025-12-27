import ResultEntryTable from '../../components/faculty/ResultEntryTable';

const rows = [
  { studentId: 'STU-0145', studentName: 'Ayesha Khan', assignment: 'CPU Scheduling Report', marks: 18, remarks: 'Great analysis', status: 'Graded' },
  { studentId: 'STU-0172', studentName: 'Bilal Ahmed', assignment: 'CPU Scheduling Report', marks: 16, remarks: 'Add more charts', status: 'Graded' },
  { studentId: 'STU-0198', studentName: 'Sara Malik', assignment: 'CPU Scheduling Report', marks: 0, remarks: '', status: 'Pending' },
];

const Results = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Student Results</p>
          <h1 className="text-2xl font-semibold text-gray-900">Enter marks</h1>
          <p className="text-sm text-gray-600">Class: BSCS - A • Assignment: CPU Scheduling Report</p>
        </div>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
          Export (mock)
        </button>
      </div>

      <ResultEntryTable rows={rows} />
    </div>
  );
};

export default Results;

