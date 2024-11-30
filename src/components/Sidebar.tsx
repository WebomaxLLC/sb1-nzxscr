import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart2, 
  Settings,
  LogOut
} from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-teal-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-8 w-8" />
          RemitPro
        </h1>
      </div>
      
      <nav className="mt-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-3 hover:bg-teal-800 transition-colors ${
              isActive ? 'bg-teal-800' : ''
            }`
          }
        >
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </NavLink>

        <NavLink
          to="/remittances"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-3 hover:bg-teal-800 transition-colors ${
              isActive ? 'bg-teal-800' : ''
            }`
          }
        >
          <FileText className="h-5 w-5" />
          Remittances
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-3 hover:bg-teal-800 transition-colors ${
              isActive ? 'bg-teal-800' : ''
            }`
          }
        >
          <Users className="h-5 w-5" />
          Customers
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-3 hover:bg-teal-800 transition-colors ${
              isActive ? 'bg-teal-800' : ''
            }`
          }
        >
          <BarChart2 className="h-5 w-5" />
          Reports
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-3 hover:bg-teal-800 transition-colors ${
              isActive ? 'bg-teal-800' : ''
            }`
          }
        >
          <Settings className="h-5 w-5" />
          Settings
        </NavLink>
      </nav>

      <div className="absolute bottom-0 w-64 p-4">
        <button className="flex items-center gap-2 px-4 py-3 w-full hover:bg-teal-800 transition-colors">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;