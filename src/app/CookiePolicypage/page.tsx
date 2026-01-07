import React from 'react';

const CookiePolicypage = () => {
  return (
    <main className='flex flex-col items-center justify-start px-6 py-12  md:py-32'>
      <div className='w-full max-w-4xl'>
        <section className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <h1 className='text-2xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 mt-20'>
              Cookie Policy
            </h1>
          </div>

          <div className='w-full text-left text-neutral-800'>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicypage;
