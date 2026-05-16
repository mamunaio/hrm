'use client';

import React, { useState } from 'react';
import { Briefcase, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo credentials
    if (email === 'admin@company.com' && password === '123456') {
      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                <Briefcase size={28} />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Corporate HRM</h1>
            </div>
            
            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Your Workplace, Under Your Control
            </h2>
            <p className="text-blue-100 text-lg">
              A modern and smart management system to increase your organization's efficiency.
            </p>
          </div>

          <div className="relative z-10 text-sm text-blue-200">
            &copy; 2024 Corporate HRM Solutions. All rights reserved.
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-12 bg-white">
          <div className="max-w-sm mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h3>
            <p className="text-gray-500 mb-8">Login to your account</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-danger text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                Email or password is incorrect
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <Link href="#" className="text-sm font-semibold text-primary hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Lock size={18} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-xl font-bold hover:bg-blue-700 transform transition-all active:scale-[0.98] shadow-lg shadow-blue-200"
              >
                Login
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account? <Link href="#" className="text-primary font-bold hover:underline">Request Onboarding</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
