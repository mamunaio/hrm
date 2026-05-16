'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  FileText, 
  Wallet, 
  Calendar, 
  ShieldCheck,
  Search,
  Check,
  X,
  Eye,
  Info
} from 'lucide-react';

const leaveRequests = [
  { id: 1, name: 'Karim Ahmed', type: 'Sick', from: '14 Nov', to: '16 Nov', days: '3 Days', reason: 'Fever and headache', applied: '12 Nov', status: 'Pending', avatar: 'KA' },
  { id: 2, name: 'Salma Akter', type: 'Annual', from: '20 Nov', to: '24 Nov', days: '5 Days', reason: 'Family event', applied: '10 Nov', status: 'Approved', avatar: 'SA' },
  { id: 3, name: 'Rakibul Hasan', type: 'Emergency', from: '15 Nov', to: '15 Nov', days: '1 Day', reason: 'Personal work', applied: '14 Nov', status: 'Rejected', avatar: 'RH' },
];

const leaveBalances = [
  { name: 'Karim Ahmed', annual: '18', sick: '14', casual: '10', used: '8', remaining: '34', avatar: 'KA' },
  { name: 'Salma Akter', annual: '18', sick: '14', casual: '10', used: '5', remaining: '37', avatar: 'SA' },
];

export default function LeaveManagementPage() {
  const [activeTab, setActiveTab] = useState('requests');

  return (
    <DashboardLayout title="Leave Management">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="card p-1.5 flex gap-1 w-fit">
          {[
            { id: 'requests', label: 'Requests', icon: FileText },
            { id: 'balance', label: 'Balance', icon: Wallet },
            { id: 'calendar', label: 'Calendar', icon: Calendar },
            { id: 'policy', label: 'Policy', icon: ShieldCheck },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-blue-100' 
                  : 'text-gray-500 hover:text-primary hover:bg-blue-50'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'requests' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white outline-none focus:ring-2 focus:ring-primary">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
                <div className="relative w-64">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search employee..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Days</th>
                    <th className="px-6 py-4">Reason</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leaveRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                            {req.avatar}
                          </div>
                          <span className="text-sm font-bold text-gray-900">{req.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">{req.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{req.from} - {req.to}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">{req.days}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-[150px] truncate">{req.reason}</td>
                      <td className="px-6 py-4">
                        <span className={`status-badge ${
                          req.status === 'Pending' ? 'status-leave' : 
                          req.status === 'Approved' ? 'status-active' : 'status-resigned'
                        }`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          {req.status === 'Pending' ? (
                            <>
                              <button className="p-2 text-success hover:bg-green-50 rounded-lg"><Check size={18}/></button>
                              <button className="p-2 text-danger hover:bg-red-50 rounded-lg"><X size={18}/></button>
                            </>
                          ) : (
                            <button className="p-2 text-gray-400 hover:text-primary rounded-lg"><Eye size={18}/></button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'balance' && (
          <div className="card overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Annual</th>
                  <th className="px-6 py-4">Sick</th>
                  <th className="px-6 py-4">Casual</th>
                  <th className="px-6 py-4">Used</th>
                  <th className="px-6 py-4">Remaining</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leaveBalances.map((bal, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                          {bal.avatar}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{bal.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">{bal.annual} Days</td>
                    <td className="px-6 py-4 text-sm font-bold">{bal.sick} Days</td>
                    <td className="px-6 py-4 text-sm font-bold">{bal.casual} Days</td>
                    <td className="px-6 py-4 text-sm font-bold text-danger">{bal.used} Days</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-50 text-success rounded-full text-xs font-black">
                        {bal.remaining} Days
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-primary"><Info size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="card p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">November 2024</h3>
              <div className="flex gap-2">
                <button className="p-2 border border-border rounded-lg hover:bg-gray-50">Prev</button>
                <button className="p-2 border border-border rounded-lg hover:bg-gray-50">Next</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
              {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => (
                <div key={d} className="bg-gray-50 p-4 text-center text-xs font-bold text-gray-400 uppercase">{d}</div>
              ))}
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="bg-white min-h-[120px] p-4 hover:bg-gray-50 transition-all group relative">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-primary">{i + 1}</span>
                  {i === 13 && (
                    <div className="mt-2 space-y-1">
                      <div className="px-2 py-1 bg-blue-100 text-primary text-[10px] font-bold rounded flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Karim
                      </div>
                    </div>
                  )}
                  {i === 19 && (
                    <div className="mt-2 space-y-1">
                      <div className="px-2 py-1 bg-green-100 text-success text-[10px] font-bold rounded flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-success rounded-full"></div> Salma
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
