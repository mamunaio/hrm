'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import KanbanBoard from '@/components/hrm/KanbanBoard';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  CheckSquare,
  Plus,
  Search,
  MoreVertical,
  ExternalLink,
  Clock
} from 'lucide-react';

const jobPostings = [
  { id: 1, title: 'Senior Frontend Developer', dept: 'Engineering', vacancies: 2, applicants: 45, status: 'Open', posted: '3 days ago' },
  { id: 2, title: 'UI/UX Designer', dept: 'Design', vacancies: 1, applicants: 28, status: 'Open', posted: '5 days ago' },
  { id: 3, title: 'HR Executive', dept: 'HR', vacancies: 1, applicants: 15, status: 'Closed', posted: '10 days ago' },
];

export default function RecruitmentPage() {
  const [activeTab, setActiveTab] = useState('applicants');

  return (
    <DashboardLayout title="Recruitment Management">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="card p-1.5 flex gap-1 w-fit overflow-x-auto no-scrollbar">
          {[
            { id: 'jobs', label: 'Job Postings', icon: Briefcase },
            { id: 'applicants', label: 'Applicants', icon: Users },
            { id: 'interviews', label: 'Interviews', icon: Calendar },
            { id: 'onboarding', label: 'Onboarding', icon: CheckSquare },
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

        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="relative w-64">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Search size={18} />
                  </span>
                  <input type="text" className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl text-sm" placeholder="Search postings..." />
                </div>
              </div>
              <button className="btn-primary flex items-center gap-2">
                <Plus size={18} /> Create New Job
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobPostings.map((job) => (
                <div key={job.id} className="card p-6 hover:border-primary transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      job.status === 'Open' ? 'bg-green-100 text-success' : 'bg-red-100 text-danger'
                    }`}>
                      {job.status === 'Open' ? 'Active' : 'Closed'}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors"><MoreVertical size={18} /></button>
                  </div>
                  
                  <h4 className="text-lg font-black text-gray-900 group-hover:text-primary transition-colors">{job.title}</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase mt-1 tracking-widest">{job.dept}</p>

                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-50 pt-6">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Vacancies</p>
                      <p className="text-sm font-black text-gray-900 mt-1">{job.vacancies} Posts</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Applicants</p>
                      <p className="text-sm font-black text-primary mt-1">{job.applicants} Applied</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase">
                    <div className="flex items-center gap-1">
                      <Clock size={12} /> {job.posted}
                    </div>
                    <button className="text-primary hover:underline flex items-center gap-1">
                      Details <ExternalLink size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applicants' && <KanbanBoard />}

        {activeTab === 'interviews' && (
          <div className="card p-8 min-h-[500px] flex flex-col items-center justify-center text-gray-400">
            <Calendar size={48} className="mb-4 opacity-20" />
            <p className="font-bold">Interview schedule will be displayed here</p>
            <button className="mt-4 btn-primary text-xs">Schedule Interview</button>
          </div>
        )}

        {activeTab === 'onboarding' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">New Employee Onboarding</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Arif Hossain', role: 'Software Engineer', progress: 75, tasks: '3/4 done' },
                { name: 'Momota Begum', role: 'Accountant', progress: 40, tasks: '2/5 done' },
              ].map((hire, i) => (
                <div key={i} className="card p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h5 className="font-bold text-gray-900">{hire.name}</h5>
                      <p className="text-xs text-gray-500 font-medium">{hire.role}</p>
                    </div>
                    <span className="text-xs font-black text-primary">{hire.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${hire.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span>{hire.tasks} tasks completed</span>
                    <button className="text-primary hover:underline">Manage Tasks</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
