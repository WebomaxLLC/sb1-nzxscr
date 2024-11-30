import React from 'react';
import { DollarSign, Users, Clock, CheckCircle } from 'lucide-react';

function StatCard({ icon: Icon, title, value, className }: any) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={DollarSign}
          title="Total Revenue"
          value="$45,231.89"
          className="border-l-4 border-teal-500"
        />
        <StatCard
          icon={Users}
          title="Total Customers"
          value="1,257"
          className="border-l-4 border-blue-500"
        />
        <StatCard
          icon={Clock}
          title="Pending Remittances"
          value="23"
          className="border-l-4 border-yellow-500"
        />
        <StatCard
          icon={CheckCircle}
          title="Completed Today"
          value="45"
          className="border-l-4 border-green-500"
        />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Transaction ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data - replace with real data */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">#TR-7845</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">$1,200.00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Completed
                  </span>
                </td>
                <td className="py-3 px-4">2024-03-15</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;