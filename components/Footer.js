import React from "react";
import { GlobeIcon, BadgeCheckIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-xs md:text-sm text-gray-500 dark:bg-[#292A2D] dark:text-white">
      <div className="md:px-8 md:py-3 px-4 py-1">
        <p>INDIA</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-4 gap-y-2 grid-flow-row-dense px-8 py-3">
        <div className="flex link hover:text-red-700 justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <BadgeCheckIcon className="h-5 mr-1 text-blue-800" />
          <a target="_blank" href="https://github.com/jay75chauhan">
            Jay Chauhan{" "}
          </a>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Adverting</p>
          <p>Business</p>
          <p>How Serch Works</p>
        </div>
        <div className="flex justify-center space-x-8  md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
