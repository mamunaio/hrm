'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  User, 
  Briefcase, 
  Clock, 
  Wallet, 
  BarChart3, 
  FileText,
  Mail,
  Phone,
  Calendar,
  Download,
  Plus,
  Edit2,
  AlertCircle,
  Star
} from 'lucide-react';

const tabs = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'employment', label: 'Employment', icon: Briefcase },
  { id: 'attendance', label: 'Attendance', icon: Clock },
  { id: 'salary', label: 'Salary', icon: Wallet },
  { id: 'performance', label: 'Performance', icon: BarChart3 },
  { id: 'documents', label: 'Documents', icon: FileText },
];

export default function EmployeeProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <DashboardLayout title="Employee Profile">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Panel */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-6">
          <div className="card p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-blue-400"></div>
            
            <div className="relative pt-4">
              <div className="w-32 h-32 rounded-full bg-white p-1 mx-auto shadow-xl">
                <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-4xl">
                  KA
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">Karim Ahmed</h2>
              <p className="text-sm font-semibold text-primary mt-1">Senior Software Engineer</p>
              <div className="mt-3 inline-block px-3 py-1 bg-green-100 text-success rounded-full text-xs font-bold">
                Active Employee
              </div>
            </div>

            <div className="mt-8 space-y-4 text-left">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  <Briefcase size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold">Employee ID</p>
                  <p className="font-bold text-gray-900">EMP-2024-001</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold">Email</p>
                  <p className="font-bold text-gray-900">karim.a@company.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold">Phone</p>
                  <p className="font-bold text-gray-900">+880 1712-345678</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Tenure</p>
                <p className="text-sm font-bold text-gray-900 mt-1">3 Years</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Leave</p>
                <p className="text-sm font-bold text-gray-900 mt-1">12/18</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Rating</p>
                <p className="text-sm font-bold text-primary mt-1">4.8/5</p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full btn-primary flex items-center justify-center gap-2">
                <Edit2 size={16} /> Edit Profile
              </button>
              <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <FileText size={16} /> Salary Slip
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 w-full space-y-6">
          {/* Tabs Navigation */}
          <div className="card p-2 flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
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

          {/* Tab Content */}
          <div className="card p-8">
            {activeTab === 'personal' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                  <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                    <Edit2 size={14} /> Edit
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    { label: 'Full Name', value: 'Karim Ahmed' },
                    { label: 'Date of Birth', value: '15 May, 1995' },
                    { label: 'Gender', value: 'Male' },
                    { label: 'Blood Group', value: 'O+' },
                    { label: 'NID Number', value: '1234567890' },
                    { label: 'TIN Number', value: '9876543210' },
                    { label: 'Marital Status', value: 'Married' },
                    { label: 'Religion', value: 'Islam' },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-gray-50 pb-3">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="mt-1 font-semibold text-gray-800">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle size={18} className="text-primary" /> Emergency Contact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Name</p>
                      <p className="font-bold text-gray-800">Rina Akter (Wife)</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Phone</p>
                      <p className="font-bold text-gray-800">+880 1711-223344</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'employment' && (
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-900">Employment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'Department', value: 'Engineering' },
                    { label: 'Designation', value: 'Senior Software Engineer' },
                    { label: 'Employment Type', value: 'Full-time' },
                    { label: 'Reporting Manager', value: 'Abdur Rahman' },
                    { label: 'Work Location', value: 'Dhaka Head Office' },
                    { label: 'Shift', value: 'Day Shift (9AM - 6PM)' },
                    { label: 'Join Date', value: '01 January, 2021' },
                    { label: 'Salary Grade', value: 'Grade A' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-4">
                      <span className="text-sm font-medium text-gray-500">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'attendance' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Attendance Record (Nov 2024)</h3>
                  <div className="flex gap-2">
                    <button className="p-2 border border-border rounded-lg hover:bg-gray-50">
                      <Calendar size={18} />
                    </button>
                    <select className="border border-border rounded-lg text-sm px-3 py-1 font-bold">
                      <option>November 2024</option>
                      <option>October 2024</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Present', value: '18', color: 'text-success bg-green-50' },
                    { label: 'Absent', value: '0', color: 'text-danger bg-red-50' },
                    { label: 'Late', value: '2', color: 'text-warning bg-amber-50' },
                    { label: 'Leave', value: '1', color: 'text-primary bg-blue-50' },
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-2xl text-center ${stat.color}`}>
                      <p className="text-2xl font-black">{stat.value}</p>
                      <p className="text-[10px] font-bold uppercase mt-1 opacity-70">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border border-border rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase">
                      <tr>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">In Time</th>
                        <th className="px-6 py-3 text-left">Out Time</th>
                        <th className="px-6 py-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { date: '14 Nov', in: '09:05 AM', out: '06:10 PM', status: 'Present' },
                        { date: '13 Nov', in: '09:15 AM', out: '06:05 PM', status: 'Late' },
                        { date: '12 Nov', in: '09:00 AM', out: '06:00 PM', status: 'Present' },
                      ].map((row, i) => (
                        <tr key={i} className="text-sm">
                          <td className="px-6 py-4 font-bold">{row.date}</td>
                          <td className="px-6 py-4 text-gray-600">{row.in}</td>
                          <td className="px-6 py-4 text-gray-600">{row.out}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              row.status === 'Present' ? 'bg-green-100 text-success' : 'bg-amber-100 text-warning'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Document List</h3>
                  <button className="btn-primary flex items-center gap-2 text-sm">
                    <Plus size={16} /> Upload
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'NID_Copy.pdf', date: 'Jan 10, 2021', size: '1.2 MB' },
                    { name: 'Appointment_Letter.pdf', date: 'Jan 01, 2021', size: '2.5 MB' },
                    { name: 'Education_Certificates.zip', date: 'Jan 10, 2021', size: '15.4 MB' },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-2xl hover:border-primary group transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-primary">
                        <Download size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'salary' && <div className="p-12 text-center text-gray-400">Salary information will be displayed here...</div>}
            {activeTab === 'performance' && <div className="p-12 text-center text-gray-400">Performance records will be displayed here...</div>}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
