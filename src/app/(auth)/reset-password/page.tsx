'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { IoLocationSharp } from 'react-icons/io5';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [isReset, setIsReset] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Password reset successful:', formData.password);
    setIsReset(true);
  };

  const handleBackToLogin = () => {
    // Navigate to login page
    console.log('Back to login');
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
            Reset Password
          </h1>
          <p className='text-center text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8 px-2'>
            {isReset
              ? 'Your password has been reset successfully!'
              : 'Please enter your new password.'}
          </p>

          {!isReset ? (
            <>
              {/* Reset Password Form */}
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
                {/* New Password Input */}
                <div>
                  <label
                    htmlFor='password'
                    className='block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2'
                  >
                    New Password <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Enter new password'
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

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2'
                  >
                    Confirm Password <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id='confirmPassword'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder='Re-enter new password'
                      className='w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm placeholder:text-xs sm:placeholder:text-sm'
                      required
                      minLength={6}
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors p-1'
                    >
                      {showConfirmPassword ? (
                        <EyeOff className='w-4 h-4 sm:w-5 sm:h-5' />
                      ) : (
                        <Eye className='w-4 h-4 sm:w-5 sm:h-5' />
                      )}
                    </button>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-sm sm:text-base mt-6'
                >
                  Reset Password
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-6'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='w-5 h-5 text-green-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold text-green-900 mb-1'>
                      Password Reset Successful!
                    </h3>
                    <p className='text-xs text-green-700'>
                      Your password has been changed successfully. You can now
                      login with your new password.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back to Login Button */}
              <button
                onClick={handleBackToLogin}
                className='w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-sm sm:text-base'
              >
                Go to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}