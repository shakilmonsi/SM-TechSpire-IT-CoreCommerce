import Image from 'next/image';

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  title: string;
  bio: string;
}

const TeamMemberCard = ({
  imageSrc,
  name,
  title,
  bio,
}: TeamMemberCardProps) => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <Image
        src={imageSrc}
        alt={`Portrait of ${name}, ${title}`}
        className='h-56 w-56 rounded-[20px] object-cover grayscale'
        width={224}
        height={224}
      />
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-xl font-bold text-neutral-800'>{name}</h3>
        <p className='text-sm font-normal text-neutral-600'>{title}</p>
        <p className='w-64 text-sm font-normal leading-tight text-neutral-800'>
          {bio}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
