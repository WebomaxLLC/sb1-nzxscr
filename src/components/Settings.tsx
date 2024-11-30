import React from 'react';
import { Save } from 'lucide-react';

function Settings() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors">
          <Save className="h-5 w-5" />
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  defaultValue="RemitPro"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  defaultValue="contact@remitpro.com"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              {[
                'Email notifications for new transactions',
                'SMS alerts for completed remittances',
                'Weekly report summaries',
                'Security alerts'
              ].map((setting) => (
                <div key={setting} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    {setting}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;