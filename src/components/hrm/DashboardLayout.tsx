'use client';

import React from 'react';
import HRMSidebar from './HRMSidebar';
import HRMHeader from './HRMHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-light-bg">
      <HRMSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <HRMHeader title={title} />
        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
