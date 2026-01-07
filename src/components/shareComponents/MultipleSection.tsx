// import Image from 'next/image';
// import Link from 'next/link';

// export default function MultipleSection() {
//   return (
//     <section
//       aria-label="Temporary Works features"
//       className="relative overflow-hidden mx-auto"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10 opacity-60">
//         <Image
//           src="/images/bg.png"
//           alt=""
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto md:my-16 my-10 px-4 md:px-4 lg:px-6 h-screen">
//         {/* Block 1: Copy left, media right */}
//         <div className='grid items-center md:gap-10 gap-4 md:grid-cols-2 lg:gap-24'>
//           <div className='order-2 md:order-1'>
//             <h2 className='text-2xl sm:text-3xl font-extrabold text-neutral-800 tracking-tight py-3'>
//               Streamline Temporary Works Management
//             </h2>
//             <p className="md:mt-4 mt-2 text-base leading-7 text-neutral-700">
//               Create, track, and close out TW assets with structured
//               workflows—from initial design to permits, approvals, and final
//               striking—built for site safety and compliance.
//             </p>
//             <div className="md:mt-6 mt-3">
//               <Link
//                 href="/temporary-works"
//                 className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 px-4 text-sm font-semibold leading-tight text-teal-950 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
//               >
//                 Learn more
//               </Link>
//             </div>
//           </div>

//           <div className="relative order-1 md:order-2">
//             <div className="relative  overflow-hidden">
//               <Image
//                 src="/images/resaltDashaboar.png"
//                 alt="TW Management list view"
//                 width={1248}
//                 height={758}
//                 sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
//                 className="h-auto w-full object-cover"
//               />
//             </div>
//             <div className="absolute -right-3 bottom-[-10%] md:right-[-4%] md:bottom-[-4%] w-28 sm:w-36 overflow-hidden">
//               <Image
//                 src="/images/phoneversion.png"
//                 alt="TW mobile view"
//                 width={320}
//                 height={640}
//                 sizes='(min-width: 640px) 144px, 112px'
//                 className='w-full md:h-auto h-[40%] object-cover'
//               />
//             </div>
//           </div>
//         </div>

//         {/* Spacer */}
//         {/* <div className="md:mt-24 mt-8" /> */}

//         {/* Block 2: Media left, copy right */}
//         <div className="grid items-center md:gap-10 gap-4 md:grid-cols-2 lg:gap-28 md:mt-16 mt-8">
//           <div className="relative">
//             <div className="relative w-full  overflow-hidden">
//               <Image
//                 src="/images/dashboar.png"
//                 alt="Site drawing and zones"
//                 width={1248}
//                 height={758}
//                 sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
//                 className="h-auto w-full object-cover"
//               />
//             </div>
//           </div>

//           <div>
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-800 tracking-tight">
//               Organize and Navigate <span className="block">Every Site</span>
//             </h2>
//             <p className="md:mt-4 mt-2 text-base leading-7 text-neutral-700">
//               Create sites, areas, and zones, view drawings by location, and
//               draw asset polygons within zones for precise on‑site planning.
//             </p>
//             <div className="md:mt-6 mt-4">
//               <Link
//                 href="/site-planning"
//                 className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 px-6 text-sm font-semibold leading-tight text-teal-950 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
//               >
//                 Learn more
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function MultipleSection() {
  return (
    <section
      aria-label="Temporary Works features"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:pt-[82px] pt-10 pd:mb-0 md:mb-0 mb-74  md:px-4 lg:px-6 h-screen">
        {/* Block 1: Copy left, media right */}
        <div className="grid items-center md:gap-10 gap-4 md:grid-cols-2 lg:gap-24">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-800 tracking-tight py-3">
              Monitor Projects at a Glance
            </h2>
            <p className="md:mt-4 mt-2 text-base leading-7 text-neutral-700 max-w-[400px]">
              Get instant visibility into project health with a centralized
              dashboard. Track progress, manage multiple sites, and make
              decisions backed by real-time data.
            </p>
            <div className="md:mt-6 mt-3">
              <Link
                href="/temporary-works"
                className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 px-4 text-sm font-semibold leading-tight text-teal-950 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative  overflow-hidden">
              <Image
                src="/images/dash122.png"
                alt="TW Management list view"
                width={1248}
                height={738}
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Spacer */}
        {/* <div className="md:mt-24 mt-8" /> */}

        {/* Block 2: Media left, copy right */}
        <div className="grid items-center md:gap-10 gap-4 md:grid-cols-2 lg:gap-28 md:pt-6 pt-6">
          <div className="relative">
            <div className="relative w-full  overflow-hidden">
              <Image
                src="/images/dashboar.png"
                alt="Site drawing and zones"
                width={1248}
                height={738}
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-800 tracking-tight">
              Organize and Navigate
              <span className="block"> Every Site</span>
            </h2>
            <p className="md:mt-4 mt-2 text-base leading-7 text-neutral-700 max-w-[414px]">
             Create sites, areas, and zones, view drawings by location, and draw asset polygons within zones for precise on-site planning.
            </p>
            <div className="md:mt-6 mt-4">
              <Link
                href="/site-planning"
                className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 px-6 text-sm font-semibold leading-tight text-teal-950 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
