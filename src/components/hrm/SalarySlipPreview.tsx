'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';

export default function SalarySlipPreview() {
  return (
    <div className="bg-white border border-border shadow-2xl rounded-2xl p-12 max-w-4xl mx-auto my-8 font-inter text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 border-primary pb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white">
            <Briefcase size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary tracking-tight">Corporate HRM</h1>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Smart Enterprise Solutions</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-black text-gray-900 mb-1 uppercase">Salary Slip</h2>
          <p className="text-sm font-bold text-primary">November 2024</p>
          <p className="text-xs text-gray-400 mt-2">Slip ID: PAY-2024-11-001</p>
        </div>
      </div>

      {/* Employee Info */}
      <div className="grid grid-cols-2 gap-12 py-10">
        <div className="space-y-4">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Employee Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">Name:</span>
              <span className="text-sm font-bold text-gray-900">Karim Ahmed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">ID:</span>
              <span className="text-sm font-bold text-gray-900">EMP-001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">Department:</span>
              <span className="text-sm font-bold text-gray-900">Engineering</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">Designation:</span>
              <span className="text-sm font-bold text-gray-900">Senior Developer</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Bank Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">Bank:</span>
              <span className="text-sm font-bold text-gray-900">Dutch Bangla Bank</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">Account:</span>
              <span className="text-sm font-bold text-gray-900">**** 5678</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">bKash:</span>
              <span className="text-sm font-bold text-gray-900">017...456</span>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings & Deductions */}
      <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden mb-10">
        <div className="border-r border-gray-200">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h4 className="text-xs font-black text-gray-900 uppercase">Earnings</h4>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Basic Salary</span>
              <span className="font-bold">৳ 50,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>House Rent (40%)</span>
              <span className="font-bold">৳ 20,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Medical Allowance</span>
              <span className="font-bold">৳ 5,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Transport Allowance</span>
              <span className="font-bold">৳ 5,000</span>
            </div>
            <div className="flex justify-between text-sm pt-4 border-t border-dashed">
              <span className="font-bold">Gross Total</span>
              <span className="font-black text-primary">৳ 80,000</span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h4 className="text-xs font-black text-gray-900 uppercase">Deductions</h4>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Provident Fund</span>
              <span className="font-bold">৳ 5,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Income Tax</span>
              <span className="font-bold">৳ 3,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Insurance</span>
              <span className="font-bold">৳ 500</span>
            </div>
            <div className="flex justify-between text-sm pt-14 border-t border-dashed">
              <span className="font-bold">Total Deduction</span>
              <span className="font-black text-danger">৳ 9,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Net Payable */}
      <div className="bg-primary p-8 rounded-2xl flex justify-between items-center text-white mb-16 shadow-xl shadow-blue-100">
        <div>
          <h4 className="text-xs font-bold uppercase opacity-80">Net Payable Amount</h4>
          <p className="text-sm font-medium mt-1">Seventy One Thousand Taka Only</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-black">৳ 71,000</p>
        </div>
      </div>

      {/* Signatures */}
      <div className="flex justify-between pt-20">
        <div className="text-center w-48">
          <div className="border-t border-gray-300 pt-2 text-xs font-bold text-gray-500 uppercase">Employee Signature</div>
        </div>
        <div className="text-center w-48">
          <div className="border-t border-gray-300 pt-2 text-xs font-bold text-gray-500 uppercase">HR Manager</div>
        </div>
        <div className="text-center w-48">
          <div className="border-t border-gray-300 pt-2 text-xs font-bold text-gray-500 uppercase">Managing Director</div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">This is a computer generated document and does not require a physical signature.</p>
      </div>
    </div>
  );
}
