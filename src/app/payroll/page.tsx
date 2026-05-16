'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import SalarySlipPreview from '@/components/hrm/SalarySlipPreview';
import { 
  Wallet, 
  FileText, 
  History, 
  Search, 
  Download, 
  Send,
  Printer,
  CheckCircle2
} from 'lucide-react';

const payrollData = [
  { id: 1, name: 'Karim Ahmed', basic: 50000, gross: 80000, deduction: 9000, net: 71000, status: 'Processed', avatar: 'KA' },
  { id: 2, name: 'Salma Akter', basic: 40000, gross: 65000, deduction: 7000, net: 58000, status: 'Processed', avatar: 'SA' },
  { id: 3, name: 'Rakibul Hasan', basic: 35000, gross: 58000, deduction: 6000, net: 52000, status: 'Pending', avatar: 'RH' },
];

export default function PayrollPage() {
  const [activeTab, setActiveTab] = useState('process');

  return (
    <DashboardLayout title="Payroll Management">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="card p-1.5 flex gap-1 w-fit">
          {[
            { id: 'process', label: 'Process Payroll', icon: Wallet },
            { id: 'slip', label: 'Salary Slip', icon: FileText },
            { id: 'history', label: 'Payroll History', icon: History },
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

        {activeTab === 'process' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Employees', value: '248', color: 'bg-blue-50 text-blue-600' },
                { label: 'Processed', value: '240', color: 'bg-green-50 text-green-600' },
                { label: 'Remaining', value: '8', color: 'bg-amber-50 text-amber-600' },
                { label: 'Total Amount', value: '৳ 4,850,000', color: 'bg-purple-50 text-purple-600' },
              ].map((stat, i) => (
                <div key={i} className="card p-6">
                  <p className="text-xs font-bold text-gray-400 uppercase">{stat.label}</p>
                  <h3 className="text-xl font-black mt-1 text-gray-900">{stat.value}</h3>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-border">
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white">
                  <option>November 2024</option>
                  <option>October 2024</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white">
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>HR</option>
                </select>
              </div>
              <button className="btn-primary flex items-center gap-2">
                <CheckCircle2 size={18} /> Process All Payroll
              </button>
            </div>

            <div className="card overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Basic</th>
                    <th className="px-6 py-4">Gross</th>
                    <th className="px-6 py-4">Deduction</th>
                    <th className="px-6 py-4">Net Salary</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {payrollData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                            {row.avatar}
                          </div>
                          <span className="text-sm font-bold text-gray-900">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">৳ {row.basic.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-medium">৳ {row.gross.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-medium text-danger">৳ {row.deduction.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-black text-primary">৳ {row.net.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`status-badge ${row.status === 'Processed' ? 'status-active' : 'status-leave'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary font-bold text-xs hover:underline">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'slip' && (
          <div className="space-y-8">
            <div className="card p-6 flex flex-col md:flex-row gap-6 items-end justify-center bg-blue-50/30 border-blue-100">
              <div className="w-full md:w-64 space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Search Employee</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Search size={18} />
                  </span>
                  <input type="text" className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm" placeholder="Name or ID..." />
                </div>
              </div>
              <div className="w-full md:w-48 space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Select Month</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold bg-white">
                  <option>November 2024</option>
                  <option>October 2024</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-primary transition-all shadow-sm">
                  <Printer size={20} />
                </button>
                <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-primary transition-all shadow-sm">
                  <Download size={20} />
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
                  <Send size={18} /> Send to Email
                </button>
              </div>
            </div>

            <SalarySlipPreview />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
