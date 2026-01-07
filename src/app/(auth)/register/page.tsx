'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { IoLocationSharp } from 'react-icons/io5';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <div className='w-full max-w-[95%] sm:max-w-md'>
        {/* Card Container */}
        <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100'>
          {/* Logo */}
          <div className='flex justify-center mb-4 sm:mb-6'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg'>
              <IoLocationSharp className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
            </div>
          </div>

          {/* Title */}
          <h1 className='text-xl sm:text-2xl font-bold text-center text-gray-900 mb-1 sm:mb-2'>
            Signup
          </h1>
          <p className='text-center text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8 px-2'>
            Please provide the information below to get started.
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
            {/* Name Input */}
            <div>
              <label
                htmlFor='name'
                className='block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2'
              >
                Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter full name'
                className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm placeholder:text-xs sm:placeholder:text-sm'
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor='email'
                className='block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2'
              >
                Email <span className='text-red-500'>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm placeholder:text-xs sm:placeholder:text-sm'
                required
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor='phone'
                className='block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2'
              >
                Phone No <span className='text-red-500'>*</span>
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm placeholder:text-xs sm:placeholder:text-sm'
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor='password'
                className='block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2'
              >
                Password <span className='text-red-500'>*</span>
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password'
                  className='w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm placeholder:text-xs sm:placeholder:text-sm'
                  required
                  minLength={6}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors p-1'
                >
                  {showPassword ? (
                    <EyeOff className='w-4 h-4 sm:w-5 sm:h-5' />
                  ) : (
                    <Eye className='w-4 h-4 sm:w-5 sm:h-5' />
                  )}
                </button>
              </div>
              <p className='text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2'>
                • Password must have 6 characters
              </p>
            </div>

            {/* Signup Button */}
            <button
              type='submit'
              className='w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-sm sm:text-base mt-6'
            >
              Signup
            </button>
          </form>

          {/* Login Link */}
          <div className='text-center mt-5 sm:mt-6'>
            <p className='text-xs sm:text-sm text-gray-600'>
              Already have an account?{' '}
              <button className='text-pink-600 hover:text-pink-700 font-medium transition-colors'>
                Login Here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}