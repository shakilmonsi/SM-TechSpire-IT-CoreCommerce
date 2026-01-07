"use client";

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-slate-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-base font-bold text-[#222222]">
          {question}
        </span>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white">
          <FiChevronDown
            className={`h-6 w-6 text-neutral-600 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-base text-[#222222] font-normal">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;