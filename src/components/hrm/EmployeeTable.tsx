'use client';

import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  email: string;
  dept: string;
  designation: string;
  joinDate: string;
  status: 'Active' | 'On Leave' | 'Resigned' | 'Probation';
  avatar: string;
}

const employees: Employee[] = [
  { id: 'EMP001', name: 'Karim Ahmed', email: 'karim@company.com', dept: 'Engineering', designation: 'Senior Developer', joinDate: 'Jan 12, 2021', status: 'Active', avatar: 'KA' },
  { id: 'EMP002', name: 'Salma Akter', email: 'salma@company.com', dept: 'HR', designation: 'HR Executive', joinDate: 'Mar 05, 2022', status: 'Active', avatar: 'SA' },
  { id: 'EMP003', name: 'Rakibul Hasan', email: 'rakib@company.com', dept: 'Sales', designation: 'Sales Manager', joinDate: 'Jun 15, 2020', status: 'On Leave', avatar: 'RH' },
  { id: 'EMP004', name: 'Tanjina Akter', email: 'tanjina@company.com', dept: 'Marketing', designation: 'Content Writer', joinDate: 'Nov 20, 2023', status: 'Probation', avatar: 'TA' },
  { id: 'EMP005', name: 'Sujan Mahmud', email: 'sujan@company.com', dept: 'Engineering', designation: 'Junior Developer', joinDate: 'Feb 10, 2024', status: 'Active', avatar: 'SM' },
];

const statusMap = {
  'Active': { label: 'Active', class: 'status-active' },
  'On Leave': { label: 'On Leave', class: 'status-leave' },
  'Resigned': { label: 'Resigned', class: 'status-resigned' },
  'Probation': { label: 'Probation', class: 'status-probation' },
};

export default function EmployeeTable() {
  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4 w-10">
              <input type="checkbox" className="rounded text-primary focus:ring-primary" />
            </th>
            <th className="px-6 py-4">Employee</th>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Department</th>
            <th className="px-6 py-4">Designation</th>
            <th className="px-6 py-4">Join Date</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {employees.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-50 transition-colors group">
              <td className="px-6 py-4">
                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                    {emp.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors cursor-pointer">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 font-medium">{emp.id}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                  {emp.dept}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{emp.designation}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{emp.joinDate}</td>
              <td className="px-6 py-4">
                <span className={`status-badge ${statusMap[emp.status].class}`}>
                  {statusMap[emp.status].label}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-danger hover:bg-red-50 rounded-lg transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 border-t border-border flex items-center justify-between bg-gray-50/50">
        <p className="text-sm text-gray-500">Showing 5 of 248 employees</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-border rounded-lg text-sm bg-white hover:bg-gray-50 disabled:opacity-50">Previous</button>
          <button className="px-4 py-2 border border-border rounded-lg text-sm bg-white hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
