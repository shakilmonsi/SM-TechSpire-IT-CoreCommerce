import TeamMemberCard from './TeamMemberCard';
// --------
const teamMembers = [
  {
    imageSrc: '/images/about/1.png',
    name: 'Shayan Rassolpour',
    title: 'Founder, CEO',
    bio: "Siu is a highly experienced civil engineer with over 23 years in the construction industry. She is a director of the UK's Temporary Works forum.",
  },
  {
    imageSrc: '/images/about/2.png',
    name: 'Alex Sporyk',
    title: 'CTO',
    bio: 'Praesent at orci sed lorem viverra posuere. Nulla facilisi. Cras tincidunt sapien ut libero fermentum, vitae tempus justo luctus.',
  },
];

const AboutPage = () => {
  return (
    <main className='flex flex-col items-center justify-start px-6 md:pt-[130px] pt-[100px] md:mb-0 mb-[570px] h-screen'>
      <div className='w-full max-w-3xl'>
        <section className='flex flex-col items-center md:gap-16 gap-4'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <h1 className='text-3xl font-bold leading-9 text-neutral-800'>
              About Us
            </h1>
            <p className='text-base leading-7 text-neutral-800'>
              Coordeck is a B2B construction project management platform
              designed specifically for managers, contractors, and workers. We
              assist teams in coordinating temporary works, managing documents,
              and overseeing on-site activities all in one place, from site
              planning to asset tracking. Built to meet the demands of real
              jobsite conditions, Coordeck ensures your projects remain on
              track, compliant, and well-managed.
            </p>
          </div>

          <div className='flex w-full flex-col items-center md:gap-8 gap-3'>
            <h2 className='text-2xl font-bold leading-7 text-neutral-800 md:mb-4'>
              Our Team
            </h2>
            <div className='flex flex-col items-center justify-center md:gap-24 gap-5 md:flex-row'>
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  imageSrc={member.imageSrc}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
