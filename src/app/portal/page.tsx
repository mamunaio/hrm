'use client';

import React from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  FileText, 
  Receipt,
  Plus,
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';

export default function EmployeePortalPage() {
  return (
    <DashboardLayout title="Employee Self-Service">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="card p-8 bg-gradient-to-r from-primary to-blue-500 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black">Good Afternoon, Karim!</h2>
            <p className="text-blue-100 mt-2">Have a productive day ahead.</p>
            
            <div className="flex gap-4 mt-8">
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-all flex items-center gap-2">
                <Plus size={18} /> Apply for Leave
              </button>
              <button className="bg-blue-400/30 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-400/40 transition-all flex items-center gap-2">
                <Receipt size={18} /> Claim Expense
              </button>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-6 flex items-center justify-between group hover:border-primary transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Attendance Calendar</h4>
                    <p className="text-xs text-gray-500">View your attendance report</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-all" />
              </div>

              <div className="card p-6 flex items-center justify-between group hover:border-primary transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-success flex items-center justify-center group-hover:bg-success group-hover:text-white transition-all">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Salary Slip</h4>
                    <p className="text-xs text-gray-500">Download Nov 2024 slip</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-all" />
              </div>
            </div>

            {/* Performance Snapshot */}
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-gray-900">Your Performance (Q4)</h3>
                <button className="text-primary text-xs font-bold hover:underline">Details</button>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Project Delivery', value: 95 },
                  { label: 'Code Quality', value: 88 },
                  { label: 'Team Collaboration', value: 92 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="text-primary">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Leave Balance */}
            <div className="card p-6">
              <h4 className="font-bold text-gray-900 mb-6">Leave Balance</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-xs font-bold text-gray-500">Annual Leave</span>
                  <span className="font-black text-gray-900">12/18 Days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-xs font-bold text-gray-500">Sick Leave</span>
                  <span className="font-black text-gray-900">4/14 Days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-xs font-bold text-gray-500">Casual Leave</span>
                  <span className="font-black text-gray-900">2/10 Days</span>
                </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="card p-6">
              <h4 className="font-bold text-gray-900 mb-6">Notice Board</h4>
              <div className="space-y-6">
                {[
                  { title: 'Office Picnic 2024', date: '20 December', type: 'Event' },
                  { title: 'New Health Insurance Policy', date: '01 January', type: 'Policy' },
                ].map((notice, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Info size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 leading-tight">{notice.title}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{notice.date} • {notice.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
