import TemporaryBlack from "@/components/temporarySection/TemporaryBlack";
import TemporaryWhite from "@/components/temporarySection/TemporaryWhite";
import TemporaryWhiteLast from "@/components/temporarySection/TemporaryWhiteLast";
import React from "react";
import { HiUsers } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import {
  MdOutlineQrCodeScanner,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";

const Page = () => {
  return (
    <main
      id="temporary-works-page"
      className="flex flex-col items-center justify-start pt-24 sm:pt-26"
    >
      <div className="w-full max-w-2xl px-4 sm:px-6 mb-8 sm:mb-14 mx-auto">
        <section className="flex flex-col items-center gap-4 sm:gap-12 pt-1 sm:pt-12">
          <div className="flex flex-col items-center gap-2 sm:gap-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-8 sm:leading-9 text-neutral-800">
              Temporary Works
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-neutral-800">
              CoorDeck’s Temporary Works platform helps you plan, track, and
              approve every asset digitally, reducing risk, preventing delays,
              and keeping projects on schedule.
            </p>
          </div>
        </section>
      </div>

      <TemporaryBlack
        title="Streamline TW Asset Management"
        des="Create, track, and close out TW assets with structured workflows, from initial design to permits, approvals, and final striking, built for site safety and compliance."
        icon={<IoIosHome />}
        image="/images/temporary/tw11.jpg"
        buttonText="TW Assets"
      />
      <TemporaryWhite
        title="Flexible User Management"
        des="Add users, assign responsibilities, and organize teams by areas. Stay in control as your crew scales."
        icon={<HiUsers />}
        image="/images/temporary/tw21.jpg"
        buttonText="User"
      />
      <TemporaryBlack
        title="Monitor Projects at a Glance"
        des="Get instant visibility into project health with a centralized dashboard. Track progress, manage multiple sites, and make decisions backed by real-time data."
        icon={<MdOutlineSpaceDashboard />}
        image="/images/temporary/tw31.jpg"
        buttonText="Dash Board"
      />
      <TemporaryWhite
        title="Stay in Control of Every Document"
        des="Access the latest forms, designs, and permits in one place. View document statuses, revision histories, and keep teams aligned with up-to-date information."
        icon={<SiGoogledocs />}
        image="/images/temporary/tw4.jpg"
        buttonText="Docs"
      />
      <TemporaryBlack
        title="QR Codes Built for the Field"
        des="Generated QR codes for assets to simplify on-site installation and inspections. Scan to access asset info, status, and updates right from the field."
        icon={<MdOutlineQrCodeScanner />}
        image="/images/temporary/tw5.jpg"
        buttonText="Qr codes"
      />
      <TemporaryWhiteLast
        title="See How It Works"
        des="Get a clear view of how CoorDeck simplifies construction project management."
        image="/images/temporary/tw6.jpg"
        buttonText="Book a Demo"
      />
    </main>
  );
};

export default Page;
