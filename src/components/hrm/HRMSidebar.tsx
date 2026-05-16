'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  UserPlus, 
  Clock, 
  CalendarCheck, 
  Wallet, 
  Receipt, 
  BarChart3, 
  GraduationCap, 
  PieChart, 
  Settings, 
  LogOut,
  Briefcase
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navSections = [
  {
    title: 'OVERVIEW',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    ]
  },
  {
    title: 'PEOPLE',
    items: [
      { name: 'Employee List', href: '/employees', icon: Users },
      { name: 'Departments', href: '/departments', icon: Building2 },
      { name: 'Recruitment', href: '/recruitment', icon: UserPlus },
    ]
  },
  {
    title: 'TIME',
    items: [
      { name: 'Attendance', href: '/attendance', icon: Clock },
      { name: 'Leave Management', href: '/leave', icon: CalendarCheck },
    ]
  },
  {
    title: 'FINANCE',
    items: [
      { name: 'Payroll', href: '/payroll', icon: Wallet },
      { name: 'Expenses', href: '/expenses', icon: Receipt },
    ]
  },
  {
    title: 'GROWTH',
    items: [
      { name: 'Performance', href: '/performance', icon: BarChart3 },
      { name: 'Training', href: '/training', icon: GraduationCap },
    ]
  },
  {
    title: 'REPORTS',
    items: [
      { name: 'Analytics', href: '/reports', icon: PieChart },
    ]
  },
  {
    title: 'SETTINGS',
    items: [
      { name: 'System Settings', href: '/settings', icon: Settings },
    ]
  }
];

export default function HRMSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white dark:bg-gray-900 border-r border-border h-screen sticky top-0 flex flex-col overflow-y-auto transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100 dark:shadow-none">
            <Briefcase size={24} />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 dark:text-white leading-tight">Corporate</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">HRM SYSTEM</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-8 py-4">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="px-3 text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest mb-3 uppercase">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                      isActive 
                        ? "bg-primary text-white shadow-md shadow-blue-100 dark:shadow-none" 
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-border bg-gray-50/50 dark:bg-gray-800/50">
        <div className="flex items-center gap-3 p-2">
          <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold">
            AR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Abdur Rahman</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">HR Manager</p>
          </div>
          <button className="text-gray-400 hover:text-danger transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
