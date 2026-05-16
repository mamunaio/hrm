'use client';

import React from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  Building2, 
  Users, 
  User, 
  MoreVertical, 
  Plus,
  Search,
  ArrowUpRight
} from 'lucide-react';

const departments = [
  { id: 1, name: 'Engineering', head: 'Abdur Rahman', members: 85, budget: '৳ 1.2M', color: 'bg-blue-50 text-blue-600' },
  { id: 2, name: 'Human Resource', head: 'Salma Akter', members: 12, budget: '৳ 0.4M', color: 'bg-green-50 text-green-600' },
  { id: 3, name: 'Sales & Marketing', head: 'Rakibul Hasan', members: 45, budget: '৳ 0.8M', color: 'bg-purple-50 text-purple-600' },
  { id: 4, name: 'Finance', head: 'Arif Hossain', members: 18, budget: '৳ 0.6M', color: 'bg-amber-50 text-amber-600' },
  { id: 5, name: 'Operations', head: 'Momota Begum', members: 56, budget: '৳ 0.9M', color: 'bg-red-50 text-red-600' },
  { id: 6, name: 'Product Design', head: 'Tanjina Akter', members: 32, budget: '৳ 0.7M', color: 'bg-pink-50 text-pink-600' },
];

export default function DepartmentsPage() {
  return (
    <DashboardLayout title="Department Management">
      <div className="space-y-6">
        {/* Header Controls */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Search size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Search department..." 
              className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
          <button className="btn-primary flex items-center gap-2 px-6 py-2.5">
            <Plus size={18} /> Add New Department
          </button>
        </div>

        {/* Dept Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept.id} className="card p-6 hover:border-primary transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${dept.color}`}>
                  <Building2 size={24} />
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{dept.name}</h3>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <User size={16} />
                    <span>Head of Dept</span>
                  </div>
                  <span className="font-bold text-gray-900">{dept.head}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Users size={16} />
                    <span>Team Members</span>
                  </div>
                  <span className="font-bold text-primary">{dept.members} Members</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Monthly Budget</p>
                  <p className="text-sm font-black text-gray-900 mt-1">{dept.budget}</p>
                </div>
                <button className="p-2 bg-gray-50 text-gray-400 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
