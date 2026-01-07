'use client';
import Link from 'next/link';
import React from 'react';

const HowItWorksSection = () => {
  return (
    <section
      className='relative flex items-center justify-center sm:justify-start 
                 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-52 
                 py-20 sm:py-28 md:py-32 
                 bg-cover bg-center'
      style={{ backgroundImage: "url('/images/HowItWorksSection.png')" }}
    >
      {/* Dark overlay (optional for readability on mobile) */}

      <div className='sm:px-30 px-0'>
        <div className='relative md:px-5 px-0 z-10 w-full max-w-7xl flex flex-col items-center sm:items-start text-center sm:text-left gap-6'>
          {/* Heading */}
          <h2 className='text-[#222] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight tracking-tight'>
            See How It Works
          </h2>

          {/* Sub Text */}
          <p className='text-[#222] text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-[320px]'>
            Get a clear view of how CoorDeck simplifies construction project
            management.
          </p>

          {/* Button */}
          <Link href="/bookdemo">
          <button
            className='inline-flex py-[10px] px-[48px] text-[16px]  font-[700] rounded-[30px] bg-[#00A3E0] hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 text-white  text-sm sm:text-base items-center justify-center 
                transition'
          >
              Book a Demo
            
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
