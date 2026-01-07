import { FC } from "react";
import Image from "next/image";

export const FloatingButton: FC = () => {
  return (
    <div className="fixed bottom-6 right-6 w-12 h-12 p-2 bg-[#1E2E36] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
      <Image
        src="/images/last_page_Rounded.png"
        alt="Next"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
};
