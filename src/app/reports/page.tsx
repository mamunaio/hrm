'use client';

import React from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import ReportCard from '@/components/hrm/ReportCard';
import { 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign,
  PieChart,
  FileSpreadsheet
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

const headcountTrend = [
  { month: 'Jan', count: 210 },
  { month: 'Feb', count: 215 },
  { month: 'Mar', count: 222 },
  { month: 'Apr', count: 228 },
  { month: 'May', count: 235 },
  { month: 'Jun', count: 248 },
];

const deptDist = [
  { name: 'Engineering', value: 85, color: '#1A56DB' },
  { name: 'Sales', value: 45, color: '#7E3AF2' },
  { name: 'HR', value: 12, color: '#057A55' },
  { name: 'Others', value: 106, color: '#E5E7EB' },
];

const salaryCost = [
  { month: 'Jul', cost: 42 },
  { month: 'Aug', cost: 43 },
  { month: 'Sep', cost: 45 },
  { month: 'Oct', cost: 47 },
  { month: 'Nov', cost: 48.5 },
];

export default function ReportsPage() {
  return (
    <DashboardLayout title="Reports & Analytics">
      <div className="space-y-8">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Headcount', value: '248', icon: Users, color: 'text-primary' },
            { label: 'Turnover Rate', value: '2.5%', icon: TrendingUp, color: 'text-danger' },
            { label: 'Avg Tenure', value: '3.2 Years', icon: Clock, color: 'text-success' },
            { label: 'HR Cost Ratio', value: '12%', icon: DollarSign, color: 'text-purple' },
          ].map((stat, i) => (
            <div key={i} className="card p-6 border-l-4 border-l-primary hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-2xl font-black mt-2 text-gray-900">{stat.value}</h3>
                </div>
                <stat.icon className={stat.color} size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h4 className="font-bold text-gray-900 mb-6">Headcount Growth</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={headcountTrend}>
                  <XAxis dataKey="month" hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#1A56DB" strokeWidth={3} dot={{fill: '#1A56DB', r: 4}} activeDot={{r: 6}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-6">
            <h4 className="font-bold text-gray-900 mb-6">Dept. Distribution</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie data={deptDist} innerRadius={60} outerRadius={80} dataKey="value">
                    {deptDist.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-6">
            <h4 className="font-bold text-gray-900 mb-6">Monthly Salary Cost (Lakh ৳)</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryCost}>
                  <Bar dataKey="cost" fill="#7E3AF2" radius={[4, 4, 0, 0]} />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Report Cards */}
        <h3 className="text-xl font-bold text-gray-900 px-2 mt-12">Available Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReportCard 
            name="Employee Directory" 
            description="Detailed list of all active and inactive employees of the organization." 
            type="excel" 
            icon={Users} 
          />
          <ReportCard 
            name="Monthly Attendance" 
            description="Summary of daily attendance of all employees for the current month." 
            type="excel" 
            icon={Clock} 
          />
          <ReportCard 
            name="Payroll Summary" 
            description="Detailed report of monthly salaries and other allowances by department." 
            type="pdf" 
            icon={DollarSign} 
          />
          <ReportCard 
            name="Leave Report" 
            description="Employee annual leave usage and remaining leave balances." 
            type="excel" 
            icon={FileSpreadsheet} 
          />
          <ReportCard 
            name="Performance Summary" 
            description="Performance ratings and KPI status of all employees for the current quarter." 
            type="pdf" 
            icon={TrendingUp} 
          />
          <ReportCard 
            name="Turnover Analysis" 
            description="Analysis of employee turnover rate and reasons over the last 12 months." 
            type="pdf" 
            icon={PieChart} 
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
