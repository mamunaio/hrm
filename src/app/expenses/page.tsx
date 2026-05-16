'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  Receipt, 
  Plus, 
  Search, 
  Filter, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Eye,
  Download,
  FileText
} from 'lucide-react';

const expenseClaims = [
  { id: 'EXP-001', name: 'Karim Ahmed', category: 'Travel', date: 'Nov 12, 2024', amount: 2500, status: 'Pending', avatar: 'KA' },
  { id: 'EXP-002', name: 'Salma Akter', category: 'Office Supplies', date: 'Nov 10, 2024', amount: 1200, status: 'Approved', avatar: 'SA' },
  { id: 'EXP-003', name: 'Rakibul Hasan', category: 'Meals', date: 'Nov 08, 2024', amount: 800, status: 'Rejected', avatar: 'RH' },
  { id: 'EXP-004', name: 'Sujan Mahmud', category: 'Internet', date: 'Nov 05, 2024', amount: 1500, status: 'Approved', avatar: 'SM' },
];

export default function ExpensesPage() {
  return (
    <DashboardLayout title="Expense Management">
      <div className="space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Claims', value: '৳ 32,500', icon: DollarSign, color: 'text-primary bg-blue-50 dark:bg-blue-900/20' },
            { label: 'Pending', value: '৳ 8,400', icon: Clock, color: 'text-warning bg-amber-50 dark:bg-amber-900/20' },
            { label: 'Approved', value: '৳ 21,600', icon: CheckCircle2, color: 'text-success bg-green-50 dark:bg-green-900/20' },
            { label: 'Rejected', value: '৳ 2,500', icon: XCircle, color: 'text-danger bg-red-50 dark:bg-red-900/20' },
          ].map((stat, i) => (
            <div key={i} className="card p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mt-1">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Search size={18} />
              </span>
              <input 
                type="text" 
                placeholder="Search by ID or Name..." 
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none bg-white dark:bg-gray-800 transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
              <Filter size={18} /> Filters
            </button>
          </div>
          <button className="btn-primary flex items-center gap-2 px-6 py-2.5 shadow-lg shadow-blue-200 dark:shadow-none">
            <Plus size={18} /> New Expense Claim
          </button>
        </div>

        {/* Claims Table */}
        <div className="card overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-800/50 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Claim ID</th>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Receipt</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {expenseClaims.map((claim) => (
                <tr key={claim.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-bold text-gray-500">{claim.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-[10px]">
                        {claim.avatar}
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{claim.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {claim.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{claim.date}</td>
                  <td className="px-6 py-4 text-sm font-black text-gray-900 dark:text-white">৳ {claim.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline flex items-center gap-1 text-xs font-bold">
                      <FileText size={14} /> View
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`status-badge ${
                      claim.status === 'Approved' ? 'status-active' : 
                      claim.status === 'Pending' ? 'status-leave' : 'status-resigned'
                    }`}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Download size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
