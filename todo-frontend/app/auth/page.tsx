'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { useAuth } from '../../contexts/AuthContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  
  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">Welcome to Todo App</h1>
        
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm w-full max-w-xs" role="group">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-l-lg transition-colors duration-200 ${
                isLogin
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-r-lg transition-colors duration-200 ${
                !isLogin
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Register
            </button>
          </div>
        </div>
        
        <div className="transition-all duration-300 transform">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
