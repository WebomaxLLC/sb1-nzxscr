import React from 'react';
import { BarChart2, Download, Filter } from 'lucide-react';

function Reports() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors">
          <Download className="h-5 w-5" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Transaction Summary</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <Filter className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 flex items-center justify-center border rounded">
            <BarChart2 className="h-32 w-32 text-gray-300" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {['Daily Summary', 'Monthly Analysis', 'Customer Activity', 'Revenue Report'].map((report) => (
              <div key={report} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                <span>{report}</span>
                <Download className="h-5 w-5 text-gray-500 hover:text-teal-600 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;