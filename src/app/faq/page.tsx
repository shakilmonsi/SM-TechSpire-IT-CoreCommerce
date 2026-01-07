import FaqItem from "./FaqItem";

const faqData = [
  {
    question:
      '1. What types of construction companies is Coordeck designed for?',
    answer:
      'Coordeck is designed for a wide range of construction companies, including general contractors, subcontractors, and specialty trades. Our platform is scalable to support small teams as well as large enterprise projects.',
  },
  {
    question: '2. Do I need technical training to use Coordeck?',
    answer:
      'No, Coordeck is designed with a user-friendly interface that is intuitive and easy to navigate. We provide comprehensive onboarding and support to ensure your team can get started with minimal training.',
  },
  {
    question: '3. Can I control who sees what on the platform?',
    answer:
      'Yes, Coordeck features robust role-based access control, allowing you to set specific permissions for every user, ensuring that team members only see the information relevant to their roles.',
  },
  {
    question: '4. Does Coordeck support document version control?',
    answer:
      'Absolutely. Our platform automatically manages document versions, so you can be confident that your team is always working from the latest plans and specifications, reducing errors and rework.',
  },
  {
    question: '5. How long does it take to get started?',
    answer:
      'Getting started with Coordeck is fast and straightforward. Our team will guide you through the setup process, and you can have your first project up and running in as little as a few hours.',
  },
  {
    question: '6. Can Coordeck generate QR codes for on-site use?',
    answer:
      'Yes, Coordeck can generate QR codes for assets, equipment, and specific site locations. This allows for quick access to information and streamlined tracking directly from the job site using any mobile device.',
  },
  {
    question: '7. Does Coordeck help with regulatory compliance?',
    answer:
      'Yes, our platform helps you maintain compliance by centralizing all necessary documentation, tracking certifications, and ensuring that all on-site activities adhere to safety and regulatory standards.',
  },
  {
    question: '8. Is Coordeck cloud-based? Can I access it from anywhere?',
    answer:
      'Yes, Coordeck is a fully cloud-based platform. You can access your project information from anywhere with an internet connection, whether you are in the office, on-site, or on the go.',
  },
];

const FaqPage = () => {
  return (
    <main className='flex flex-col items-center justify-start md:px-6 px-4 md:py-36 pt-24 mb-8'>
      <div className='w-full max-w-4xl'>
        <section className='flex flex-col items-center md:gap-14 gap-5'>
          <h1 className='text-center text-3xl font-extrabold leading-9 text-neutral-800'>
            Frequently Asked Questions
          </h1>
          <div className='flex w-full flex-col items-start gap-2'>
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default FaqPage;
