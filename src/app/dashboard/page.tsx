'use client';

import React from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import StatCard from '@/components/hrm/StatCard';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  Banknote,
  MoreVertical,
  Check,
  X,
  Calendar,
  Gift,
  Award
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';

const attendanceData = [
  { name: 'Mon', present: 220, absent: 15, late: 13 },
  { name: 'Tue', present: 230, absent: 10, late: 8 },
  { name: 'Wed', present: 215, absent: 20, late: 13 },
  { name: 'Thu', present: 225, absent: 12, late: 11 },
  { name: 'Fri', present: 210, absent: 25, late: 13 },
];

const todayStatusData = [
  { name: 'Present', value: 221, color: '#057A55' },
  { name: 'Absent', value: 15, color: '#C81E1E' },
  { name: 'On Leave', value: 12, color: '#7E3AF2' },
];

const departmentData = [
  { name: 'Engineering', count: 85, percentage: 85 },
  { name: 'HR', count: 12, percentage: 30 },
  { name: 'Finance', count: 18, percentage: 45 },
  { name: 'Sales', count: 45, percentage: 70 },
  { name: 'Marketing', count: 32, percentage: 60 },
  { name: 'Operations', count: 56, percentage: 75 },
];

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard Overview">
      <div className="space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Employees" 
            value="248" 
            icon={Users} 
            color="blue" 
            trend="+12 this month" 
          />
          <StatCard 
            title="Today's Attendance" 
            value="221/248" 
            icon={CheckCircle2} 
            color="green" 
            trend="89% attendance" 
          />
          <StatCard 
            title="Pending Leave" 
            value="12" 
            icon={Clock} 
            color="amber" 
          />
          <StatCard 
            title="Monthly Payroll" 
            value="৳4,850,000" 
            icon={Banknote} 
            color="purple" 
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-gray-900">Weekly Attendance</h3>
              <select className="text-xs border-gray-200 rounded-lg bg-gray-50 p-1">
                <option>Current Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                  <Tooltip 
                    cursor={{fill: '#F9FAFB'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="present" fill="#1A56DB" radius={[4, 4, 0, 0]} barSize={20} name="Present" />
                  <Bar dataKey="absent" fill="#C81E1E" radius={[4, 4, 0, 0]} barSize={20} name="Absent" />
                  <Bar dataKey="late" fill="#C27803" radius={[4, 4, 0, 0]} barSize={20} name="Late" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-bold text-gray-900 mb-8">Today's Status</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={todayStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {todayStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {todayStatusData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Leave Requests */}
          <div className="card overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Recent Leave Requests</h3>
              <button className="text-primary text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Employee</th>
                    <th className="px-6 py-3">Leave Type</th>
                    <th className="px-6 py-3">Duration</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: 'Karim Ahmed', role: 'Dev', type: 'Sick', duration: '3 Days', status: 'Pending', avatar: 'KA' },
                    { name: 'Salma Akter', role: 'HR', type: 'Annual', duration: '5 Days', status: 'Approved', avatar: 'SA' },
                    { name: 'Rakibul Hasan', role: 'Sales', type: 'Emergency', duration: '1 Day', status: 'Rejected', avatar: 'RH' },
                  ].map((req, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary text-xs font-bold">
                            {req.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{req.name}</p>
                            <p className="text-[10px] text-gray-500">{req.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{req.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{req.duration}</td>
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
                          <button className="p-1 text-success hover:bg-green-50 rounded"><Check size={16}/></button>
                          <button className="p-1 text-danger hover:bg-red-50 rounded"><X size={16}/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card">
            <div className="p-6 border-b border-border">
              <h3 className="font-bold text-gray-900">Upcoming Events</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                { type: 'birthday', text: 'Sujan Mahmud\'s Birthday', date: '18 November', icon: Gift, color: 'text-pink-500 bg-pink-50' },
                { type: 'anniversary', text: 'Tanjina Akter\'s 3rd Anniversary', date: '20 November', icon: Award, color: 'text-purple-500 bg-purple-50' },
                { type: 'holiday', text: 'Victory Day', date: '16 December', icon: Calendar, color: 'text-blue-500 bg-blue-50' },
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${event.color}`}>
                    <event.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">{event.text}</p>
                    <p className="text-xs text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Headcount */}
        <div className="card p-6">
          <h3 className="font-bold text-gray-900 mb-8">Headcount by Department</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {departmentData.map((dept) => (
              <div key={dept.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{dept.name}</span>
                  <span className="font-bold text-gray-900">{dept.count} Members</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{width: `${dept.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="card">
          <div className="p-6 border-b border-border">
            <h3 className="font-bold text-gray-900">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-gray-100">
              {[
                { text: 'Rahim Ahmed joined Engineering team', time: '2 hours ago', dot: 'bg-primary' },
                { text: 'November payroll processed successfully', time: '5 hours ago', dot: 'bg-purple' },
                { text: '3 leave requests approved', time: 'Yesterday', dot: 'bg-success' },
                { text: 'New job posting published', time: '2 days ago', dot: 'bg-amber' },
              ].map((activity, i) => (
                <div key={i} className="relative flex items-center gap-6 pl-10">
                  <div className={`absolute left-0 w-3 h-3 rounded-full border-2 border-white shadow-sm ring-4 ring-white ${activity.dot} ml-2.5`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
