'use client';

import React from 'react';
import { LucideIcon, Download } from 'lucide-react';

interface ReportProps {
  name: string;
  description: string;
  type: 'pdf' | 'excel';
  icon: LucideIcon;
}

export default function ReportCard({ name, description, type, icon: Icon }: ReportProps) {
  return (
    <div className="card p-6 hover:border-primary transition-all group relative overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
          <Icon size={24} />
        </div>
        <div className={`p-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${
          type === 'pdf' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
        }`}>
          {type}
        </div>
      </div>
      
      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{description}</p>
      
      <div className="mt-6 pt-6 border-t border-gray-50">
        <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all">
          <Download size={14} /> Download Report
        </button>
      </div>

      {/* Decorative bg icon */}
      <div className="absolute -bottom-4 -right-4 opacity-[0.02] transform rotate-12 group-hover:scale-110 transition-transform">
        <Icon size={120} />
      </div>
    </div>
  );
}
