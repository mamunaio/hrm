'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  Calendar, 
  Clock, 
  UserMinus, 
  CheckCircle2, 
  Search, 
  Filter, 
  FileSpreadsheet,
  Edit2,
  Check
} from 'lucide-react';

const attendanceData = [
  { id: 1, name: 'Karim Ahmed', checkIn: '09:05 AM', checkOut: '06:10 PM', hours: '9h 5m', status: 'Present', avatar: 'KA' },
  { id: 2, name: 'Salma Akter', checkIn: '09:15 AM', checkOut: '06:05 PM', hours: '8h 50m', status: 'Late', avatar: 'SA' },
  { id: 3, name: 'Rakibul Hasan', checkIn: '-', checkOut: '-', hours: '-', status: 'Absent', avatar: 'RH' },
  { id: 4, name: 'Tanjina Akter', checkIn: '-', checkOut: '-', hours: '-', status: 'Leave', avatar: 'TA' },
  { id: 5, name: 'Sujan Mahmud', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9h 0m', status: 'Present', avatar: 'SM' },
];

export default function AttendancePage() {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <DashboardLayout title="Attendance Management">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex gap-4 p-1 bg-gray-100 rounded-xl w-fit">
          <button 
            onClick={() => setActiveTab('daily')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'daily' ? 'bg-white text-primary shadow-sm' : 'text-gray-500'}`}
          >
            Daily Attendance
          </button>
          <button 
            onClick={() => setActiveTab('monthly')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'monthly' ? 'bg-white text-primary shadow-sm' : 'text-gray-500'}`}
          >
            Monthly Report
          </button>
        </div>

        {activeTab === 'daily' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Present', value: '221', icon: CheckCircle2, color: 'text-success bg-green-50' },
                { label: 'Absent', value: '15', icon: UserMinus, color: 'text-danger bg-red-50' },
                { label: 'Late', value: '10', icon: Clock, color: 'text-warning bg-amber-50' },
                { label: 'On Leave', value: '2', icon: Calendar, color: 'text-primary bg-blue-50' },
              ].map((stat, i) => (
                <div key={i} className="card p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <input type="date" className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white" defaultValue="2024-11-16" />
                <div className="relative flex-1 max-w-xs">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search employee..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl text-sm"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white hover:bg-gray-50">
                  <Filter size={18} /> Filters
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white hover:bg-gray-50">
                  <FileSpreadsheet size={18} /> Export
                </button>
                <button className="btn-primary flex items-center gap-2 px-4 py-2">
                  <Check size={18} /> Mark All Present
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="card overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">In Time</th>
                    <th className="px-6 py-4">Out Time</th>
                    <th className="px-6 py-4">Working Hours</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {attendanceData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                            {row.avatar}
                          </div>
                          <span className="text-sm font-bold text-gray-900">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.checkIn}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.checkOut}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">{row.hours}</td>
                      <td className="px-6 py-4">
                        <span className={`status-badge ${
                          row.status === 'Present' ? 'status-active' : 
                          row.status === 'Absent' ? 'status-resigned' : 
                          row.status === 'Late' ? 'status-leave' : 'status-probation'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                          <Edit2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
