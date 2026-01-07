import Image, { type StaticImageData } from "next/image";
import React, { memo } from "react";

interface TemporaryBlackProps {
  title: string;
  des: string;
  icon: React.ReactNode;
  image: string | StaticImageData;
  buttonText: string;
}

const TemporaryBlack: React.FC<TemporaryBlackProps> = ({
  title,
  des,
  icon,
  image,
  buttonText,
}) => {
  return (
    <section className="w-full bg-[#121C21] px-2 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 mt-1 lg:mt-6 px-2 sm:px-6 lg:px-12 items-start md:items-center lg:items-center sm:mb-6">
        {/* Left Side - Text */}
        <div className="flex flex-col ml-0 md:ml-6 lg:ml-12">
          {/* Small Icon Box */}
          <div className="w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:mb-6 mb-3 rounded-xl bg-[#1E2E36] flex flex-col items-center justify-center gap-2">
            <div className="text-2xl text-white">{icon}</div>
            <h2 className="text-white text-[12px] font-medium">
              {buttonText}
            </h2>
          </div>

          {/* Title & Description */}
          <div className="w-full md:w-[300px] lg:w-[450px]">
            <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-extrabold text-white leading-snug mb-4">
              {title}
            </h2>
            <p className="text-[15px] md:text-[15.5px] lg:text-[16px] font-medium text-white leading-relaxed">
              {des}
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-center lg:justify-end md:pr-6 lg:pr-14">
          <div className="w-full md:max-w-[520px] lg:max-w-[688px] rounded-4xl overflow-hidden">
            <Image
              src={image}
              alt="Placeholder"
              width={688}
              height={516}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TemporaryBlack);
