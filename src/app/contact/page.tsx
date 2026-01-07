import Link from 'next/link';
import { FiMail, FiPhone, FiLinkedin, FiFacebook } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className='max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6 items-center h-screen md:my-0 mt-[100px] md:mb-0 mb-[200px] px-4 sm:px-6 lg:px-14'>
      <div className='col-span-1 h-auto'>
        <h2 className='text-[28px] font-bold text-[#222222] md:mb-4 mb-3'>
          Contact Us
        </h2>
        <p className='text-[#222222] text-base font-normal max-w-[610px] md:mb-10 mb-6'>
          Have questions about Coordeck or need help getting started? Our team
          is here to help. Whether you re looking for support, partnerships, or
          more info about our platform, just reach out—we’d love to hear from
          you.
        </p>
        <h3 className='text-[#222222] text-[22px] font-semibold md:my-4 my-4'>
          Contacts
        </h3>
        <div className='flex flex-col items-start gap-3 md:my-5 my-3'>
          <a
            href='mailto:Info@coordeck.com'
            className='group flex items-center md:gap-5 gap-4'
          >
            <FiMail className='h-6 w-5 lg:h-[24px] lg:w-[24px] text-neutral-600 transition-colors group-hover:text-neutral-900' />
            <span className='text-base font-medium tracking-wide text-black transition-colors group-hover:text-neutral-700'>
              Info@coordeck.com
            </span>
          </a>
          <a
            href='tel:+44-123456789'
            className='group flex items-center md:gap-5 gap-4'
          >
            <FiPhone className='h-6 w-5 lg:h-[24px] lg:w-[24px] text-neutral-600 transition-colors group-hover:text-neutral-900' />
            <span className='text-base font-medium tracking-wide text-black transition-colors group-hover:text-neutral-700'>
              +44-123456789
            </span>
          </a>
        </div>
        <div className='flex items-center gap-4 md:mt-10 mt-6 text-[#555555]'>
          <a
            href='#'
            aria-label='LinkedIn'
            className='text-neutral-600 transition-colors hover:text-[#00A3E0] p-1.5 border rounded-[10px]'
          >
            <FiLinkedin className='h-4 w-4 lg:h-6 lg:w-6' />
          </a>
          <a
            href='#'
            aria-label='Facebook'
            className='text-neutral-600 transition-colors hover:text-[#00A3E0] p-1.5 border rounded-lg'
          >
            <FiFacebook className='h-4 w-4 lg:h-6 lg:w-6' />
          </a>
        </div>
      </div>
      <div className='bg-[#F5FAFC] rounded-2xl w-full md:mt-0 mt-3'>
        <form className='rounded-2xl md:p-10 p-5'>
          <div className='w-full'>
            <div className='md:mb-7 mb-5'>
              <label
                htmlFor='fullName'
                className='pl-2 text-sm font-medium text-[#222222] mb-1 block md:mb-2'
              >
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                className='h-11 w-full rounded-xl border text-[#222222] border-gray-300 bg-white px-3 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50'
              />
            </div>
            <div className='md:my-7 my-5'>
              <label
                htmlFor='email'
                className='pl-2 text-sm font-medium text-[#222222] mb-1 block md:mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='h-11 w-full rounded-xl border text-[#222222] border-gray-300 bg-white px-3 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50'
              />
            </div>
            <div className='md:my-7 my-5'>
              <label
                htmlFor='message'
                className='pl-2 text-sm font-medium text-[#222222] mb-1 block md:mb-2'
              >
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                className='w-full  md:pt-4 pt-2 rounded-xl border text-[#222222] border-gray-300 bg-white p-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='h-10 w-full rounded-3xl md:my-4 my-2 bg-teal-950 px-6 py-2.5 text-center text-sm font-semibold tracking-tight text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-950/50'
          >
            Submit
          </button>
          <p className='text-xs text-neutral-800 md:my-3 my-1'>
            By submitting, you agree to our{' '}
            <Link
              href='/privacy-policy'
              className='text-sky-500 underline hover:text-sky-700'
            >
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              href='/terms-of-service'
              className='text-sky-500 underline hover:text-sky-700'
            >
              Terms of Service.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
