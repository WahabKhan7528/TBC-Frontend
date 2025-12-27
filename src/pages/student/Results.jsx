import ResultTable from '../../components/student/ResultTable';

const results = [
  { course: 'Operating Systems', semester: '5', marks: '88 / 100', grade: 'A', credits: 3 },
  { course: 'Database Systems', semester: '5', marks: '84 / 100', grade: 'A-', credits: 3 },
  { course: 'Linear Algebra', semester: '5', marks: '79 / 100', grade: 'B+', credits: 3 },
  { course: 'Software Engineering', semester: '5', marks: '92 / 100', grade: 'A', credits: 3 },
  { course: 'Discrete Mathematics', semester: '5', marks: '81 / 100', grade: 'B+', credits: 2 },
];

const Results = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Results</p>
          <h1 className="text-2xl font-semibold text-gray-900">Marks & grades</h1>
        </div>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
          Download Transcript
        </button>
      </div>
      <ResultTable results={results} showTranscript={false} />
    </div>
  );
};

export default Results;

