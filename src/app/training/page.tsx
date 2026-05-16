'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  GraduationCap, 
  Plus, 
  Search, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle2, 
  PlayCircle,
  MoreVertical,
  BookOpen
} from 'lucide-react';

const courses = [
  { id: 1, title: 'Advanced React & Next.js', instructor: 'Abdur Rahman', enrolled: 25, progress: 75, status: 'Ongoing', type: 'Technical' },
  { id: 2, title: 'Soft Skills for Leadership', instructor: 'Salma Akter', enrolled: 12, progress: 100, status: 'Completed', type: 'Management' },
  { id: 3, title: 'Corporate Security Training', instructor: 'Internal Admin', enrolled: 150, progress: 40, status: 'Ongoing', type: 'Compliance' },
];

export default function TrainingPage() {
  return (
    <DashboardLayout title="Training & Development">
      <div className="space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Active Courses', value: '12', icon: BookOpen, color: 'text-primary bg-blue-50 dark:bg-blue-900/20' },
            { label: 'Enrolled Employees', value: '185', icon: Users, color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' },
            { label: 'Completions', value: '45', icon: CheckCircle2, color: 'text-success bg-green-50 dark:bg-green-900/20' },
          ].map((stat, i) => (
            <div key={i} className="card p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-1">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Search size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none bg-white dark:bg-gray-800 transition-all"
            />
          </div>
          <button className="btn-primary flex items-center gap-2 px-6 py-2.5">
            <Plus size={18} /> Create New Training
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="card group hover:border-primary transition-all p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  course.status === 'Completed' ? 'bg-green-100 text-success' : 'bg-blue-100 text-primary'
                }`}>
                  {course.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{course.title}</h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">{course.type} • Instructor: {course.instructor}</p>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase">
                    <Users size={14} /> {course.enrolled} Enrolled
                  </div>
                  <span className="text-sm font-black text-primary">{course.progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all text-xs font-bold">
                  <PlayCircle size={16} /> Continue
                </button>
                <button className="p-2.5 rounded-xl border border-border text-gray-400 hover:text-primary hover:border-primary transition-all">
                  <Calendar size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Training Schedule */}
        <div className="card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-gray-900 dark:text-white">Upcoming Sessions</h3>
            <button className="text-primary text-xs font-bold hover:underline">View Calendar</button>
          </div>
          <div className="p-6 space-y-6">
            {[
              { title: 'Cyber Security Awareness', date: 'Nov 20, 2024', time: '10:00 AM', room: 'Conference Hall A' },
              { title: 'Customer Success Workshop', date: 'Nov 22, 2024', time: '02:30 PM', room: 'Virtual Session' },
            ].map((session, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Nov</span>
                    <span className="text-lg font-black text-primary leading-tight">{20 + i}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">{session.title}</h5>
                    <p className="text-xs text-gray-500 font-medium">{session.time} • {session.room}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-border rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
