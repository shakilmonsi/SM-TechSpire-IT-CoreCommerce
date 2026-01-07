'use client';
import React from 'react';

const FixWhatSlowSection = () => {
  return (
    <section className='bg-gray-900'>
      <div className='mx-auto max-w-[1304px] px-4 pt-10  pb-4 sm:px-6 md:pt-[72px]  md:pb-19 lg:px-8'>
        {/* Heading */}
        <div className='mx-auto flex max-w-[690px] flex-col items-center gap-4 text-center'>
          <h2 className='text-2xl font-extrabold leading-9 text-white sm:text-3xl'>
            Fix What Slows You Down
          </h2>
          <p className='text-base leading-7 text-white/90'>
            Disorganization, delays, and compliance gaps cost more than just
            time; they also cost trust and profit. Coordina solves the core
            issues that hold construction teams back.
          </p>
        </div>

        {/* Cards */}
        <div className='md:mt-[68px] mt-[40px] grid grid-cols-1 md:gap-6 gap-4 sm:gap-[36px] md:grid-cols-2 xl:grid-cols-4 sm:mb-0 mb-6'>
          {/* Card 1 */}
          <div className='rounded-[20px] bg-gray-800 p-6 transition duration-200 hover:shadow-lg'>
            <h3 className='lg:text-xl text-lg xl:font-extrabold font-bold leading-9 text-gray-100'>
              Structured Temporary Works
            </h3>
            <p className='md:mt-4 mt-2 text-base leading-7 text-gray-300'>
              Digitize TW asset workflows from creation to striking, ensuring
              approvals, forms, and safety checks are always in place.
            </p>
          </div>

          {/* Card 2 */}
          <div className='rounded-[20px] bg-gray-800 md:p-6 p-4 transition duration-200 hover:shadow-lg'>
            <h3 className='lg:text-xl text-lg xl:font-extrabold font-bold leading-9 text-gray-100'>
              Smarter On-Site Coordination
            </h3>
            <p className='md:mt-4 mt-2 text-base leading-7 text-gray-300'>
              Give supervisors and workers clear, task-specific info through
              zones, drawings, and QR codes right from the field.
            </p>
          </div>

          {/* Card 3 */}
          <div className='rounded-[20px] bg-gray-800 md:p-6 p-4 transition duration-200 hover:shadow-lg'>
            <h3 className='lg:text-xl text-lg xl:font-extrabold font-bold leading-9 text-gray-100'>
              Built-In Compliance Tracking
            </h3>
            <p className='md:mt-4 mt-2 text-base leading-7 text-gray-300'>
              Automated workflows keep forms, permits, and approvals on track—so
              you never miss a step or risk a shutdown.
            </p>
          </div>

          {/* Card 4 */}
          <div className='rounded-[20px] bg-gray-800 md:p-6 p-4 transition duration-200 hover:shadow-lg'>
            <h3 className='lg:text-xl text-lg xl:font-extrabold font-bold leading-9 text-gray-100'>
              Centralized Document Control
            </h3>
            <p className='md:mt-4 mt-2 text-base leading-7 text-gray-300'>
              Store and manage all project documents in one place, with revision
              history, status tracking, and role-based access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixWhatSlowSection;
