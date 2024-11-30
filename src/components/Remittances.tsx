import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import NewRemittanceModal from './NewRemittanceModal';

function Remittances() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [remittances, setRemittances] = useState([
    {
      id: 'RM-1234',
      sender: 'John Doe',
      recipient: 'Jane Smith',
      amount: 500.00,
      status: 'Pending',
      date: '2024-03-15'
    }
  ]);

  const handleNewRemittance = (data: any) => {
    const newRemittance = {
      id: `RM-${Math.floor(Math.random() * 10000)}`,
      sender: data.senderName,
      recipient: data.recipientName,
      amount: parseFloat(data.amount),
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };

    setRemittances([newRemittance, ...remittances]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Remittances</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          New Remittance
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search remittances..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Reference ID</th>
                <th className="text-left py-3 px-4">Sender</th>
                <th className="text-left py-3 px-4">Recipient</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {remittances.map((remittance) => (
                <tr key={remittance.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{remittance.id}</td>
                  <td className="py-3 px-4">{remittance.sender}</td>
                  <td className="py-3 px-4">{remittance.recipient}</td>
                  <td className="py-3 px-4">${remittance.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {remittance.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{remittance.date}</td>
                  <td className="py-3 px-4">
                    <button className="text-teal-600 hover:text-teal-800">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <NewRemittanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewRemittance}
      />
    </div>
  );
}

export default Remittances;