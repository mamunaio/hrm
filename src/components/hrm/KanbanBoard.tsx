'use client';

import React from 'react';
import { MoreHorizontal, Calendar, Star, MoveRight } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  role: string;
  date: string;
  score: number;
  avatar: string;
}

const columns = [
  { id: 'applied', title: 'Applied', count: 12 },
  { id: 'screening', title: 'Screening', count: 5 },
  { id: 'interview', title: 'Interview', count: 3 },
  { id: 'offer', title: 'Offer', count: 2 },
  { id: 'hired', title: 'Hired', count: 1 },
];

const candidates: Record<string, Candidate[]> = {
  applied: [
    { id: '1', name: 'Mamun Hossain', role: 'Frontend Dev', date: '15 Nov', score: 85, avatar: 'MH' },
    { id: '2', name: 'Rina Akter', role: 'UI Designer', date: '14 Nov', score: 78, avatar: 'RA' },
  ],
  screening: [
    { id: '3', name: 'Arif Ahmed', role: 'Backend Dev', date: '10 Nov', score: 92, avatar: 'AA' },
  ],
  interview: [
    { id: '4', name: 'Tamanna Islam', role: 'HR Manager', date: '12 Nov', score: 88, avatar: 'TI' },
  ],
};

export default function KanbanBoard() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
      {columns.map((col) => (
        <div key={col.id} className="flex-shrink-0 w-80">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-900">{col.title}</h3>
              <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs font-bold">{col.count}</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
          </div>

          <div className="space-y-4">
            {candidates[col.id]?.map((can) => (
              <div key={can.id} className="card p-4 hover:border-primary transition-all cursor-move group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary text-xs font-bold">
                      {can.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{can.name}</h4>
                      <p className="text-[10px] text-gray-500 font-medium">{can.role}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"><MoveRight size={14} /></button>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-gray-50 pt-3">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase">
                    <Calendar size={12} /> {can.date}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500 uppercase">
                    <Star size={12} fill="currentColor" /> {can.score}
                  </div>
                </div>
              </div>
            ))}

            <button className="w-full py-3 border-2 border-dashed border-gray-100 rounded-xl text-gray-400 hover:border-primary hover:text-primary transition-all text-sm font-bold flex items-center justify-center gap-2">
              + Add Candidate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
