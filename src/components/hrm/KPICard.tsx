'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';

interface KPIProps {
  name: string;
  target: string;
  current: string;
  percentage: number;
  trend: 'up' | 'down';
  employee: string;
}

export default function KPICard({ name, target, current, percentage, trend, employee }: KPIProps) {
  const colorClass = percentage >= 80 ? 'text-success' : percentage >= 50 ? 'text-warning' : 'text-danger';
  const barClass = percentage >= 80 ? 'bg-success' : percentage >= 50 ? 'bg-warning' : 'bg-danger';

  return (
    <div className="card p-6 hover:border-primary transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <Target size={20} />
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
          {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {trend === 'up' ? '+5%' : '-2%'}
        </div>
      </div>

      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-wider">{employee}</p>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400 font-bold uppercase">Progress</span>
          <span className={`font-black ${colorClass}`}>{percentage}%</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${barClass}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-end pt-2">
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">Target</p>
            <p className="text-sm font-bold text-gray-700">{target}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Current</p>
            <p className="text-sm font-bold text-gray-900">{current}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
