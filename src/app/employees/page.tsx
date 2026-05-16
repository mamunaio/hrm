'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import EmployeeTable from '@/components/hrm/EmployeeTable';
import EmployeeCard from '@/components/hrm/EmployeeCard';
import { 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  ChevronDown
} from 'lucide-react';

const employees = [
  { id: 'EMP001', name: 'Karim Ahmed', dept: 'Engineering', designation: 'Senior Developer', status: 'Active', avatar: 'KA' },
  { id: 'EMP002', name: 'Salma Akter', dept: 'HR', designation: 'HR Executive', status: 'Active', avatar: 'SA' },
  { id: 'EMP003', name: 'Rakibul Hasan', dept: 'Sales', designation: 'Sales Manager', status: 'On Leave', avatar: 'RH' },
  { id: 'EMP004', name: 'Tanjina Akter', dept: 'Marketing', designation: 'Content Writer', status: 'Probation', avatar: 'TA' },
  { id: 'EMP005', name: 'Sujan Mahmud', dept: 'Engineering', designation: 'Junior Developer', status: 'Active', avatar: 'SM' },
  { id: 'EMP006', name: 'Arif Hossain', dept: 'Finance', designation: 'Accountant', status: 'Active', avatar: 'AH' },
  { id: 'EMP007', name: 'Momota Begum', dept: 'Operations', designation: 'Coordinator', status: 'Active', avatar: 'MB' },
  { id: 'EMP008', name: 'Faruk Ahmed', dept: 'Engineering', designation: 'Tech Lead', status: 'Active', avatar: 'FA' },
] as const;

export default function EmployeesPage() {
  const [view, setView] = useState<'grid' | 'table'>('table');

  return (
    <DashboardLayout title="Employee List">
      <div className="space-y-6">
        {/* Top Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search by Name or ID..."
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold bg-white hover:bg-gray-50 transition-all text-gray-700">
              <Filter size={18} /> Filters <ChevronDown size={14} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 p-1 rounded-xl">
              <button 
                onClick={() => setView('table')}
                className={`p-2 rounded-lg transition-all ${view === 'table' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
              >
                <List size={20} />
              </button>
              <button 
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
              >
                <LayoutGrid size={20} />
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              <Plus size={18} /> Add New Employee
            </button>
          </div>
        </div>

        {/* View Content */}
        {view === 'table' ? (
          <EmployeeTable />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employees.map((emp) => (
              <EmployeeCard key={emp.id} emp={emp} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
