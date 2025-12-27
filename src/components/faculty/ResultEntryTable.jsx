const ResultEntryTable = ({ rows }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Enter / Edit Marks</h3>
        <p className="text-sm text-gray-500">Class-level performance overview</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Student</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Assignment</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Marks</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Remarks</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row) => (
              <tr key={`${row.studentId}-${row.assignment}`} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900">{row.studentName}</p>
                  <p className="text-xs text-gray-500">{row.studentId}</p>
                </td>
                <td className="px-6 py-4 text-gray-700">{row.assignment}</td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    defaultValue={row.marks}
                    className="w-24 rounded-lg border-gray-300 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    defaultValue={row.remarks}
                    className="w-full rounded-lg border-gray-300 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 flex justify-end border-t">
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800">
          Save Marks (mock)
        </button>
      </div>
    </div>
  );
};

export default ResultEntryTable;

