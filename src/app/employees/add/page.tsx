'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/hrm/DashboardLayout';
import { 
  User, 
  Briefcase, 
  Wallet, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Camera
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Employment Info', icon: Briefcase },
  { id: 3, title: 'Salary Info', icon: Wallet },
  { id: 4, title: 'Confirmation', icon: CheckCircle2 },
];

export default function AddEmployeePage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <DashboardLayout title="Add New Employee">
      <div className="max-w-4xl mx-auto">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentStep >= step.id 
                    ? 'bg-primary text-white shadow-lg shadow-blue-100' 
                    : 'bg-white border-2 border-gray-200 text-gray-400'
                }`}>
                  <step.icon size={20} />
                </div>
                <p className={`mt-3 text-xs font-bold whitespace-nowrap ${
                  currentStep >= step.id ? 'text-primary' : 'text-gray-400'
                }`}>
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 -mt-8 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Content */}
        <div className="card p-8 min-h-[500px] flex flex-col">
          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col items-center mb-8">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-all overflow-hidden">
                    <Camera size={32} />
                    <span className="text-[10px] font-bold mt-2">Upload Photo</span>
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-black/0 group-hover:bg-black/5 transition-all rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="e.g. Rahim Ahmed" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="name@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+880 1..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Present Address</label>
                <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all min-h-[100px]" placeholder="Enter your address..."></textarea>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Employee ID</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 font-bold" value="EMP-2024-045" readOnly />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Department</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all bg-white">
                    <option>Engineering</option>
                    <option>Human Resource</option>
                    <option>Finance</option>
                    <option>Sales & Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Designation</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="e.g. Software Engineer" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Join Date</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Basic Salary</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 font-bold">৳</span>
                    <input type="number" className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="0.00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Bank Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="e.g. Dutch Bangla Bank" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Account Number</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="1234567890" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">bKash/Nagad Number</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="017..." />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="flex flex-col items-center justify-center flex-1 space-y-6 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-success">
                <CheckCircle2 size={48} />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Is all information correct?</h3>
                <p className="text-gray-500 mt-2">Please double check everything before saving.</p>
              </div>
              
              <div className="w-full max-w-md bg-gray-50 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Name:</span>
                  <span className="font-bold text-gray-900">Rahim Ahmed</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Department:</span>
                  <span className="font-bold text-gray-900">Engineering</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Designation:</span>
                  <span className="font-bold text-gray-900">Senior Developer</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
            <button 
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                currentStep === 1 ? 'invisible' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft size={18} /> Previous
            </button>

            {currentStep < 4 ? (
              <button 
                onClick={nextStep}
                className="btn-primary flex items-center gap-2 px-8 py-3 shadow-lg shadow-blue-200"
              >
                Next Step <ChevronRight size={18} />
              </button>
            ) : (
              <button className="bg-success text-white px-10 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
                Save Employee
              </button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
