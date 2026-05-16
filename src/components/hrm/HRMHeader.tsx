'use client';

import React from 'react';
import { 
  Bell, 
  Search, 
  Menu, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';

import { ThemeToggle } from './ThemeToggle';

interface HRMHeaderProps {
  title: string;
}

export default function HRMHeader({ title }: HRMHeaderProps) {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-border flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-gray-500 hover:text-primary transition-colors">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="hidden md:flex items-center relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </span>
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-64 pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50/50 dark:bg-gray-800"
          />
        </div>

        {/* Theme Switcher */}
        <ThemeToggle />

        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-white dark:border-gray-900"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-3 border-l border-gray-100 pl-6 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">Admin User</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HR Manager</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-blue-100 ring-2 ring-white group-hover:ring-primary/20 transition-all">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
