'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import KPICard from '@/components/hrm/KPICard';
import { 
  Target, 
  Users, 
  Award,
  Plus,
  Search,
  TrendingUp,
  Star
} from 'lucide-react';

export default function PerformancePage() {
  const [activeTab, setActiveTab] = useState('kpi');

  return (
    <DashboardLayout title="Performance & Appraisal">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="card p-1.5 flex gap-1 w-fit overflow-x-auto no-scrollbar">
          {[
            { id: 'cycle', label: 'Review Cycle', icon: TrendingUp },
            { id: 'kpi', label: 'KPI Management', icon: Target },
            { id: 'team', label: 'Team Review', icon: Users },
            { id: 'appraisal', label: 'Appraisal', icon: Award },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
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

        {activeTab === 'cycle' && (
          <div className="space-y-8">
            <div className="card p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">Active Cycle</span>
                    <h3 className="text-3xl font-black mt-4">Q4 2024 Review</h3>
                    <p className="text-blue-100 mt-2">Oct 1 - Dec 31, 2024</p>
                  </div>
                  <button className="bg-white text-primary px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl">
                    Start New Cycle
                  </button>
                </div>
                
                <div className="mt-12 space-y-4 max-w-lg">
                  <div className="flex justify-between text-sm font-bold">
                    <span>Progress</span>
                    <span>65% Completed</span>
                  </div>
                  <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full w-[65%]"></div>
                  </div>
                  <div className="flex gap-8 pt-4">
                    <div>
                      <p className="text-3xl font-black">160</p>
                      <p className="text-xs font-bold text-blue-200 uppercase">Total Reviews</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black">104</p>
                      <p className="text-xs font-bold text-blue-200 uppercase">Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black">56</p>
                      <p className="text-xs font-bold text-blue-200 uppercase">Remaining</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            </div>

            <h4 className="font-bold text-gray-900 px-2">Past Review Cycles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Q3 2024 Review', date: 'Jul - Sep', score: '4.5/5' },
                { name: 'Q2 2024 Review', date: 'Apr - Jun', score: '4.2/5' },
                { name: 'Q1 2024 Review', date: 'Jan - Mar', score: '4.8/5' },
              ].map((cycle, i) => (
                <div key={i} className="card p-6 flex items-center justify-between hover:border-primary transition-all group">
                  <div>
                    <h5 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{cycle.name}</h5>
                    <p className="text-xs text-gray-400 font-bold uppercase mt-1">{cycle.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-gray-900">{cycle.score}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Avg Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'kpi' && (
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold bg-white">
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Sales</option>
                </select>
                <div className="relative w-64">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Search size={18} />
                  </span>
                  <input type="text" className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl text-sm" placeholder="Search KPI..." />
                </div>
              </div>
              <button className="btn-primary flex items-center gap-2 px-6 py-2.5">
                <Plus size={18} /> Add New KPI
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <KPICard 
                name="Code Quality Maintenance" 
                target="< 5 bugs/month" 
                current="3 bugs/month" 
                percentage={85} 
                trend="up" 
                employee="Karim Ahmed" 
              />
              <KPICard 
                name="Sales Target Achievement" 
                target="৳ 2,000,000" 
                current="৳ 1,200,000" 
                percentage={60} 
                trend="down" 
                employee="Rakibul Hasan" 
              />
              <KPICard 
                name="Project On-time Delivery" 
                target="100%" 
                current="94%" 
                percentage={94} 
                trend="up" 
                employee="Sujan Mahmud" 
              />
            </div>
          </div>
        )}

        {activeTab === 'appraisal' && (
          <div className="card overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Increment (%)</th>
                  <th className="px-6 py-4">New Salary</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Karim Ahmed', score: '92/100', rating: 'Excellent', increment: '12%', newSalary: '৳ 56,000', avatar: 'KA' },
                  { name: 'Salma Akter', score: '85/100', rating: 'Very Good', increment: '8%', newSalary: '৳ 43,200', avatar: 'SA' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                          {row.avatar}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-primary">{row.score}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill={i < 4 ? 'currentColor' : 'none'} />
                        ))}
                        <span className="text-xs font-bold ml-1 text-gray-900">{row.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-black text-success">+{row.increment}</td>
                    <td className="px-6 py-4 text-sm font-black text-gray-900">{row.newSalary}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline font-bold text-xs">View Report</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
