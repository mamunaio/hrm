'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  Settings, 
  Building2, 
  Bell, 
  Lock, 
  Globe, 
  Mail, 
  Clock, 
  Save,
  User,
  ShieldCheck,
  Palette
} from 'lucide-react';

const tabs = [
  { id: 'general', label: 'General', icon: Building2 },
  { id: 'localization', label: 'Localization', icon: Globe },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Lock },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <DashboardLayout title="System Settings">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Nav */}
        <div className="w-full lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-blue-100 dark:shadow-none' 
                  : 'text-gray-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full space-y-6">
          <div className="card p-8">
            {activeTab === 'general' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Company Information</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Manage your organization's basic details.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Company Name</label>
                    <input type="text" defaultValue="Corporate HRM Solutions" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Company Email</label>
                    <input type="email" defaultValue="hr@company.com" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
                    <input type="text" defaultValue="+880 1234-567890" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Website URL</label>
                    <input type="text" defaultValue="https://company.com" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Office Address</label>
                  <textarea rows={3} defaultValue="Level 12, Corporate Tower, Gulshan-1, Dhaka" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all"></textarea>
                </div>
              </div>
            )}

            {activeTab === 'localization' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Regional Settings</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Control language, currency and date formats.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Currency Symbol</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option>BDT (৳)</option>
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Time Zone</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option>(GMT+06:00) Dhaka</option>
                      <option>(GMT+00:00) UTC</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Date Format</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option>DD/MM/YYYY</option>
                      <option>MM/DD/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security & Access</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Protect your system and user data.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                        <Lock size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Two-Factor Authentication</p>
                        <p className="text-xs text-gray-500">Add an extra layer of security to your account.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                        <Palette size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Strict Password Policy</p>
                        <p className="text-xs text-gray-500">Require complex passwords for all users.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
              <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Cancel</button>
              <button className="btn-primary flex items-center gap-2 px-8 py-2.5 shadow-lg shadow-blue-200 dark:shadow-none">
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
