import React from 'react';
import { Plus, Search, UserPlus } from 'lucide-react';

function Customers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors">
          <UserPlus className="h-5 w-5" />
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="all">All Customers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Customer ID</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Phone</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">#CUS-1234</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">john.doe@example.com</td>
                <td className="py-3 px-4">+1 234-567-8900</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-teal-600 hover:text-teal-800">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;