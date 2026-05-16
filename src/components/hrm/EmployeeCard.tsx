'use client';

import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  dept: string;
  designation: string;
  status: 'Active' | 'On Leave' | 'Resigned' | 'Probation';
  avatar: string;
}

const statusColorMap = {
  'Active': 'bg-success',
  'On Leave': 'bg-warning',
  'Resigned': 'bg-danger',
  'Probation': 'bg-primary',
};

export default function EmployeeCard({ emp }: { emp: Employee }) {
  return (
    <div className="card group hover:border-primary transition-all p-6 text-center">
      <div className="relative inline-block mb-4">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-2xl mx-auto border-4 border-white shadow-md">
          {emp.avatar}
        </div>
        <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${statusColorMap[emp.status]}`}></div>
      </div>
      
      <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{emp.name}</h3>
      <p className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-wider">{emp.designation}</p>
      
      <div className="mt-3 inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold">
        {emp.dept}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-2">
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all text-xs font-bold">
          <Mail size={14} /> Email
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all text-xs font-bold">
          <Phone size={14} /> Call
        </button>
      </div>

      <button className="w-full mt-3 py-2.5 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm font-bold flex items-center justify-center gap-2">
        View Profile <ExternalLink size={14} />
      </button>
    </div>
  );
}
