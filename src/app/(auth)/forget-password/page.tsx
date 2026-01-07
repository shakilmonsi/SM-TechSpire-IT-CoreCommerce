'use client';

import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { ArrowLeft } from 'lucide-react';

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password requested for:', email);
    setIsSubmitted(true);
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
            Forget Password
          </h1>
          <p className='text-center text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8 px-2'>
            {isSubmitted
              ? 'Check your email for reset instructions.'
              : 'Enter your email to receive password reset instructions.'}
          </p>

          {!isSubmitted ? (
            <>
              {/* Forget Password Form */}
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm placeholder:text-xs sm:placeholder:text-sm'
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-sm sm:text-base'
                >
                  Send Reset Link
                </button>
              </form>

              {/* Back to Login Link */}
              <div className='text-center mt-5 sm:mt-6'>
                <button
                  onClick={handleBackToLogin}
                  className='inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-pink-600 font-medium transition-colors'
                >
                  <ArrowLeft className='w-3 h-3 sm:w-4 sm:h-4' />
                  Back to Login
                </button>
              </div>
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
                      Email Sent!
                    </h3>
                    <p className='text-xs text-green-700'>
                      We've sent a password reset link to{' '}
                      <span className='font-medium'>{email}</span>. Please
                      check your inbox and spam folder.
                    </p>
                  </div>
                </div>
              </div>

              {/* Resend and Back Button */}
              <div className='space-y-3'>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className='w-full bg-gray-100 text-gray-700 font-medium py-2.5 sm:py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base'
                >
                  Resend Email
                </button>
                <button
                  onClick={handleBackToLogin}
                  className='w-full inline-flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-pink-600 font-medium transition-colors'
                >
                  <ArrowLeft className='w-4 h-4' />
                  Back to Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}